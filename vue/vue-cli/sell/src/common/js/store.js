/**
 * Created by baixue on 2017/7/18.
 */
// 存储数据
// id为url参数，key是需要存储的数据键名，val是数据的值
export function saveToLocal(id, key, value) {
  // 定义商家数据为_seller_
  let seller = window.localStorage._seller_;
  if (!seller) {
     seller = {};
     seller[id] = {};
  } else {
     seller = JSON.parse(seller);
     if (!seller[id]) {
       seller[id] = {};
     }
  }
  seller[id][key] = value;
  window.localStorage._seller_ = JSON.stringify(seller);
};

// 读取localStorage数据
// def是默认读取数据
export function loadFromLocal(id, key, def) {
  let seller = window.localStorage._seller_;
  if (!seller) {
    return def;
  }
  seller = JSON.parse(seller)[id];
  if (!seller) {
    return def;
  }
  let ret = seller[key];
  return ret || def;
};