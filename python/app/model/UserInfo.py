from app.model.Model import Model
from app.common.Inc import Inc

# 用户信息表
class UserInfo(Model):

  uid = '0'
  nickname = ''
  position = ''
  name = ''
  gender = ''
  birthday = ''
  img = ''
  ctime = 'null'
  utime = 'null'

  # 构造函数
  def __init__(self):
    self.setPrimaryKey('uid')
    self.setSource('user_info')

  # 创建
  def beforeCreate(self):
    if self.ctime=='null' : self.ctime=Inc.date('%Y%m%d%H%M%S')

  # 更新
  def beforeUpdate(self):
    if self.utime=='null' : self.utime=Inc.date('%Y%m%d%H%M%S')
