package vip.webmis.java.modules.admin;

import java.io.File;
import java.util.HashMap;

import com.alibaba.fastjson.JSONArray;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import vip.webmis.java.common.AdminToken;
import vip.webmis.java.common.Base;
import vip.webmis.java.common.Inc;
import vip.webmis.java.library.MyFiles;

/* 文件管理 */
@RestController
@Controller("SysFileManageController")
@RequestMapping("/admin/Sysfilemanage")
public class SysfilemanageController extends Base {

  private static String dirRoot = "upload/";

  /* 构造函数 */
  SysfilemanageController(){
    // 文件根目录
    MyFiles.file_root = dirRoot;
    File dir = new File(dirRoot);
    if (!dir.exists()) dir.mkdirs();
  }

  /* 列表 */
  @RequestMapping("/list")
  String list(String token, String path) throws Exception {
    AdminToken.urlVerify(token,"SysFileManage");
    HashMap<String, Object> list = MyFiles.lists(path);
    HashMap<String, Object> _res = new HashMap<String, Object>();
    _res.put("code", 0);
    _res.put("msg", "成功");
    _res.put("data", list);
    return getJSON(_res);
  }

  /* 新建文件夹 */
  @RequestMapping("/mkDir")
  String mkDir(String token, String path, String name) throws Exception {
    AdminToken.urlVerify(token,"SysFileManage");
    HashMap<String, Object> _res;
    // 参数
    path = path.trim();
    name = name.trim();
    if(path.equals("") || name.equals("")){
      _res = new HashMap<String, Object>();
      _res.put("code", 4000);
      _res.put("msg", "参数错误!");
      return getJSON(_res);
    }
    // 结果
    if(MyFiles.mkDir(path+name)){
      _res = new HashMap<String, Object>();
      _res.put("code", 0);
      _res.put("msg", "成功");
      return getJSON(_res);
    }else{
      _res = new HashMap<String, Object>();
      _res.put("code", 5000);
      _res.put("msg", "新建文件夹失败!");
      return getJSON(_res);
    }
  }

  /* 重命名 */
  @RequestMapping("/reName")
  String reName(String token, String path, String rename, String name) throws Exception {
    AdminToken.urlVerify(token,"SysFileManage");
    HashMap<String, Object> _res;
    // 参数
    path = path.trim();
    rename = rename.trim();
    name = name.trim();
    if(path.equals("") || rename.equals("") || name.equals("")){
      _res = new HashMap<String, Object>();
      _res.put("code", 4000);
      _res.put("msg", "参数错误!");
      return getJSON(_res);
    }
    // 结果
    if(MyFiles.reName(path+rename,path+name)){
      _res = new HashMap<String, Object>();
      _res.put("code", 0);
      _res.put("msg", "成功");
      return getJSON(_res);
    }else{
      _res = new HashMap<String, Object>();
      _res.put("code", 5000);
      _res.put("msg", "重命名失败!");
      return getJSON(_res);
    }
  }

  /* 删除 */
  @RequestMapping("/rmFile")
  String rmFile(String token, String path, String data) throws Exception {
    AdminToken.urlVerify(token,"SysFileManage");
    HashMap<String, Object> _res;
    // 参数
    path = path.trim();
    JSONArray json = Inc.json_decode_array(data.trim());
    if(path.equals("") || json==null){
      _res = new HashMap<String, Object>();
      _res.put("code", 4000);
      _res.put("msg", "参数错误!");
      return getJSON(_res);
    }
    // 执行
    for(Object val : json) MyFiles.delAll(path+val.toString());
    _res = new HashMap<String, Object>();
    _res.put("code", 0);
    _res.put("msg", "成功");
    return getJSON(_res);
  }


}