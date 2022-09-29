# Question 1
print("Question 1")
def calculate(min, max, step):
  result = min

  for i in range(min,max,step):
    if (step + i) > max:
      continue
    result = result + (step + i)
  print(result)
  
# 請用你的程式補完這個函式的區塊
calculate(1, 3, 1) # 你的程式要能夠計算 1+2+3，最後印出 6
calculate(4, 8, 2) # 你的程式要能夠計算 4+6+8，最後印出 18
calculate(-1, 2, 2) # 你的程式要能夠計算 -1+1，最後印出 0
print("=================================")
# Question 2
print("Question 2")
import pandas as pd
def avg(data):
# 請用你的程式補完這個函式的區塊
  person = data["employees"]
  personData = pd.DataFrame(person)
  manager = personData["manager"]==False
  filtereData=personData[manager]
  
  print(filtereData["salary"].mean())

avg({
    "employees":[
      {
      "name":"John",
      "salary":30000,
      "manager":False
      },
      {
      "name":"Bob",
      "salary":60000,
      "manager":True
      },
      {
      "name":"Jenny",
      "salary":50000,
      "manager":False
      },
      {
      "name":"Tony",
      "salary":40000,
      "manager":False
      }
  ]
}) # 呼叫 avg 函式
print("=================================")
# Question 3
print("Question 3")
def func(a):
# 請用你的程式補完這個函式的區塊
  def inner_func(b,c):
    print(a+(b*c))
  return inner_func

func(2)(3, 4) # 你補完的函式能印出 2+(3*4) 的結果 14
func(5)(1, -5) # 你補完的函式能印出 5+(1*-5) 的結果 0
func(-3)(2, 9) # 你補完的函式能印出 -3+(2*9) 的結果 15
# 一般形式為 func(a)(b, c) 要印出 a+(b*c) 的結果
print("=================================")
# Question 4
print("Question 4")
from cmath import inf
def maxProduct(nums):
# 請用你的程式補完這個函式的區塊
  data = len(nums)
  maxNumber = -inf
  for i in range(data):
    for j in range(i+1,data):
      totalItem = nums[i] *nums[j]
      if totalItem > maxNumber:
        maxNumber = totalItem
  print(maxNumber)
  
maxProduct([5, 20, 2, 6]) # 得到 120
maxProduct([10, -20, 0, 3]) # 得到 30
maxProduct([10, -20, 0, -3]) # 得到 60
maxProduct([-1, 2]) # 得到 -2
maxProduct([-1, 0, 2]) # 得到 0
maxProduct([5,-1, -2, 0]) # 得到 2
maxProduct([-5, -2]) # 得到 10
print("=================================")
# Question 5
print("Question 5")
def twoSum(nums, target):
# your code here
  data = len(nums)
  for i in range(data):
    for j in range(i+1,data):
      if nums[i] + nums[j] ==target:
        result = [i,j]
        return result
result=twoSum([2, 11, 7, 15], 9)
print(result) # show [0, 2] because nums[0]+nums[2] is 9
print("=================================")
# Question 6
print("Question 6")
from tkinter import N
def maxZeros(nums):
  data = len(nums)
  total = 0
  for i in range(data):
    findNumber = 0
    for j in range(i,data):
      if nums[j] == 0:
        findNumber+=1
      else:
        break
      if findNumber > total:
        total = findNumber
  print(total)
# 請用你的程式補完這個函式的區塊
maxZeros([0, 1, 0, 0]) # 得到 2
maxZeros([1, 0, 0, 0, 0, 1, 0, 1, 0, 0]) # 得到 4
maxZeros([1, 1, 1, 1, 1]) # 得到 0
maxZeros([0, 0, 0, 1, 1]) # 得到 3
