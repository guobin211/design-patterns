export interface UserInfo {
  userName: string;
  userRole: string;
  token: string;
}

/**
 * 定义接口
 */
export interface BaseUserService {
  /**
   * 账号秘密登录
   * @param userName
   * @param password
   */
  doLoginPassword(userName: string, password: string): Promise<UserInfo>;

  /**
   * 手机号登录
   * @param phoneNumber string
   * @param checkCode string
   */
  doLoginPhone(phoneNumber: string, checkCode: string): Promise<UserInfo>;

  /**
   * 微信登录
   * @param wxId string
   * @param wxToken string
   */
  doLoginWeXin(wxId: string, wxToken: string): Promise<UserInfo>;

  /**
   * 登出
   */
  doLogout(): Promise<void>;

  /**
   * 更新token
   */
  updateToken(): Promise<UserInfo>;
}
