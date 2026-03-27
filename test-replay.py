#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
重放攻击检测脚本 - 用于测试 API 是否有防重放机制
⚠️ 仅限在拥有授权的服务器上测试使用!

使用方法:
1. 先正常登录获取 token
2. 脚本会自动重复发送相同请求
3. 观察服务端响应判断是否有防护
"""

import requests
import json
import time
import hashlib
from datetime import datetime

# ==================== 配置区域 ====================
BASE_URL = "https://api.shali66.com/v2"
SEND_CODE_API = f"{BASE_URL}/user-api/sys/user/sendCode"

# 测试手机号 (请填写你自己的测试手机号，用于接收验证码)
TEST_PHONE = "13800000000"

# ==================== 工具函数 ====================

def md5(text):
    """计算 MD5 哈希"""
    return hashlib.md5(text.encode('utf-8')).hexdigest()

def log(message, color="white"):
    """彩色日志输出"""
    colors = {
        "red": "\033[91m",
        "green": "\033[92m",
        "yellow": "\033[93m",
        "blue": "\033[94m",
        "reset": "\033[0m"
    }
    timestamp = datetime.now().strftime("%H:%M:%S")
    print(f"{colors.get(color, '')}[{timestamp}] {message}{colors['reset']}")

# ==================== 核心测试函数 ====================

def test_replay_attack():
    """
    重放攻击检测流程 - 针对发送验证码接口:
    1. 对同一个手机号重复发送验证码请求
    2. 观察服务端是否有限制
    3. 分析响应判断是否有防护
    """
    
    print("\n" + "="*60)
    log("开始测试发送验证码接口的防重放机制", "blue")
    log("⚠️ 注意：此测试会实际发送验证码到你的手机", "yellow")
    print("="*60 + "\n")
    
    # --- 步骤 1: 准备请求 ---
    log("步骤 1: 准备发送验证码请求...", "yellow")
    
    headers = {
        "Content-Type": "application/json"
    }
    
    # 构造验证码请求
    code_request_data = {
        "phone": TEST_PHONE,
        "type": "login"  # 登录验证码类型 (根据实际调整)
    }
    
    log(f"请求 URL: {SEND_CODE_API}", "white")
    log(f"请求手机号：{TEST_PHONE}", "white")
    log(f"警告：连续发送可能会导致手机号被临时限制", "red")
    
    # --- 步骤 2: 询问确认 ---
    print("\n" + "-" * 60)
    log("重要提示:", "yellow")
    print("  1. 此测试会向你的发送 5 条验证码短信")
    print("  2. 请在 1 分钟内完成测试")
    print("  3. 如果不想继续，请按 Ctrl+C 退出")
    print("-" * 60 + "\n")
    
    try:
        input("按回车键继续测试，或 Ctrl+C 退出...")
    except KeyboardInterrupt:
        log("\n❌ 测试已取消", "yellow")
        return
    
    # --- 步骤 3: 重复发送请求 ---
    log("\n步骤 2: 开始发送 5 次相同的验证码请求...", "yellow")
    print("-" * 60)
    
    results = []
    for i in range(5):
        log(f"\n第 {i+1} 次请求:", "blue")
        
        try:
            start_time = time.time()
            response = requests.post(SEND_CODE_API, json=code_request_data, headers=headers)
            end_time = time.time()
            
            result = {
                'attempt': i + 1,
                'status_code': response.status_code,
                'response_time': end_time - start_time,
                'success': response.status_code == 200,
                'response': response.text[:300]  # 显示前 300 字符
            }
            results.append(result)
            
            log(f"  状态码：{result['status_code']}", 
                "green" if result['success'] else "red")
            log(f"  响应时间：{result['response_time']:.3f}s", "white")
            
            # 尝试解析 JSON 响应
            try:
                resp_json = response.json()
                log(f"  响应消息：{json.dumps(resp_json, ensure_ascii=False)}", "white")
            except:
                log(f"  响应内容：{result['response']}", "white")
                
        except requests.exceptions.RequestException as e:
            log(f"  ❌ 请求失败：{e}", "red")
            results.append({
                'attempt': i + 1,
                'error': str(e)
            })
        
        # 每次请求间隔稍长一点，避免触发风控
        if i < 4:  # 最后一次不需要等待
            wait_time = 2  # 2 秒间隔
            log(f"  等待 {wait_time}秒后发送下一次...", "yellow")
            time.sleep(wait_time)
    
    # --- 步骤 4: 分析结果 ---
    print("\n" + "="*60)
    log("步骤 3: 分析结果", "blue")
    print("="*60)
    
    successful_requests = [r for r in results if r.get('success')]
    failed_requests = [r for r in results if not r.get('success') or r.get('error')]
    
    log(f"\n总请求次数：5 次", "white")
    log(f"成功次数：{len(successful_requests)} 次", "green" if len(successful_requests) > 0 else "red")
    log(f"失败次数：{len(failed_requests)} 次", "red" if len(failed_requests) > 0 else "green")
    
    # --- 步骤 5: 判断是否有防重放机制 ---
    log("\n" + "="*60)
    log("安全评估结论", "blue")
    print("="*60 + "\n")
    
    if len(successful_requests) == 5:
        log("⚠️ 【高风险】5 次验证码请求全部成功!", "red")
        log("   → 可能存在短信轰炸风险", "red")
        log("   → 建议添加频率限制、图形验证码等防护", "yellow")
        
    elif len(successful_requests) > 0 and len(failed_requests) > 0:
        log("✅ 【中等安全】部分请求被限制", "yellow")
        log("   → 服务端有一定的频率限制", "yellow")
        log("   → 需要进一步分析失败原因", "white")
        
        for req in failed_requests:
            log(f"   失败的请求 #{req['attempt']}: {req.get('error', 'Unknown')}", "white")
            
    else:
        log("✅ 【高安全性】所有重复请求都被限制!", "green")
        log("   → 服务端有良好的频率控制机制", "green")
    
    # --- 步骤 6: 建议 ---
    print("\n" + "="*60)
    log("针对验证码接口的安全建议", "blue")
    print("="*60 + "\n")
    
    print("""
1. 图形验证码:
   - 发送短信前先验证图形验证码
   - 防止机器批量调用

2. 频率限制:
   - 同一手机号每天最多发送 N 条
   - 同一 IP 每小时最多发送 N 条
   - 两次发送间隔至少 60 秒

3. Token 机制:
   - 先获取发送凭证 (带有效期的 token)
   - 每次发送后 token 失效

4. 设备指纹:
   - 识别同一设备的多次请求
   - 防止换号轰炸

5. 智能风控:
   - 异常时间段限制 (如凌晨 2-5 点)
   - 异地号码验证
   - 虚拟号码段限制

6. 成本转嫁:
   - 超过免费次数后需要付费
   - 增加攻击者成本
    """)
    
    print("="*60)
    log("测试完成!", "green")
    print("="*60 + "\n")

# ==================== 主程序 ====================

if __name__ == "__main__":
    print("\n" + "="*60)
    print("重放攻击检测工具 v1.0")
    print("⚠️ 仅用于合法的安全测试")
    print("="*60 + "\n")
    
    # 运行测试
    try:
        test_replay_attack()
    except KeyboardInterrupt:
        log("\n\n❌ 测试被用户中断", "yellow")
    except Exception as e:
        log(f"\n❌ 发生异常：{e}", "red")
        import traceback
        traceback.print_exc()
