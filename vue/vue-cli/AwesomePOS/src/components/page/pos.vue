<template>
    <div id="pos">
        <el-row>
            <el-col :span="7" class="pos-order" id="order-list">
                <el-tabs>
                    <el-tab-pane label="点餐">
                        <el-table :data="tableData" border style="width: 100%;">
                            <el-table-column prop="goodsName" label="商品名称"></el-table-column>    <!-- prop接收tableDatade中的属性值 -->
                            <el-table-column prop="count" label="数量" width="70"></el-table-column>
                            <el-table-column prop="price" label="金额" width="70"></el-table-column>
                            <el-table-column label="操作" width="100" fixed="right">
                                <template scope="scope">    <!--按钮必须放到template标签中，并设置属性 scope="scope" -->
                                    <el-button type="text" size="small" @click="delSingleGoods(scope.row)">删除</el-button>
                                    <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>  <!-- scoped是模板作用域，scope.row 相当于把这一行的goods数据传给addOrderList方法 -->
                                </template>
                            </el-table-column>
                        </el-table>
                        <div class="totalDiv">
                            <span><small>数量：</small> {{totalCount}}</span>
                            <span class="priceSpan"><small>金额：</small> ￥{{totalMoney}}元</span>
                        </div>
                        <div class="btn-groups">
                            <el-button type="warning">挂单</el-button>
                            <el-button type="danger" @click="delAllGoods">删除</el-button>
                            <el-button type="success" @click="checkOut">结账</el-button>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="挂单">挂单</el-tab-pane>
                    <el-tab-pane label="外卖">外卖</el-tab-pane>
                </el-tabs>
            </el-col>
            <el-col :span="17">
                <div class="often-goods">
                    <div class="title">常用商品</div>
                    <div class="often-goods-list">
                        <ul>
                            <li v-for="goods in oftenGoods" :key="goods.goodsId" @click="addOrderList(goods)">
                                <span>{{goods.goodsName}}</span>
                                <span class="often-price">{{goods.price}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="goodsType">
                    <el-tabs>
                        <el-tab-pane label="汉堡">
                            <div>
                                <ul class="cookList">
                                    <li v-for="goods in type0Goods" :key="goods.goodsId" @click="addOrderList(goods)">
                                        <span class="foodImg">
                                            <img  width="100%" v-bind:src="goods.goodsImg" />
                                        </span>
                                        <span class="foodName">{{goods.goodsName}}</span>
                                        <span class="foodPrice">￥{{goods.price}}元</span>
                                    </li>
                                </ul>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="小食">
                           <div>
                                <ul class="cookList">
                                    <li v-for="goods in type1Goods" :key="goods.goodsId" @click="addOrderList(goods)">
                                        <span class="foodImg">
                                            <img  width="100%" v-bind:src="goods.goodsImg" />
                                        </span>
                                        <span class="foodName">{{goods.goodsName}}</span>
                                        <span class="foodPrice">￥{{goods.price}}元</span>
                                    </li>
                                </ul>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="饮料">
                            <div>
                                <ul class="cookList">
                                    <li v-for="goods in type2Goods" :key="goods.goodsId" @click="addOrderList(goods)">
                                        <span class="foodImg">
                                            <img  width="100%" v-bind:src="goods.goodsImg" />
                                        </span>
                                        <span class="foodName">{{goods.goodsName}}</span>
                                        <span class="foodPrice">￥{{goods.price}}元</span>
                                    </li>
                                </ul>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="套餐">
                            <div>
                                <ul class="cookList">
                                    <li v-for="goods in type3Goods" :key="goods.goodsId" @click="addOrderList(goods)">
                                        <span class="foodImg">
                                            <img  width="100%" v-bind:src="goods.goodsImg" />
                                        </span>
                                        <span class="foodName">{{goods.goodsName}}</span>
                                        <span class="foodPrice">￥{{goods.price}}元</span>
                                    </li>
                                </ul>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                </div>
                <div v-loading.fullscreen.lock="fullscreenLoading"></div>
            </el-col>
        </el-row>
    </div>   
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      tableData: [],
      oftenGoods: [],
      type0Goods: [],
      type1Goods: [],
      type2Goods: [],
      type3Goods: [],
      totalMoney: 0,
      totalCount: 0,
      fullscreenLoading: false
    };
  },
  created: function() {
      this.fullscreenLoading = true;
    // 请求商品数据
    axios
      .get("http://jspang.com/DemoApi/oftenGoods.php")
      .then(reponse => {
        // 使用箭头函数之后， this就指向了外层的this， 跟作用域就没有关系了
        //  console.log(reponse);
        // console.log(this);
        this.oftenGoods = reponse.data;
      })
      .catch(error => {
        // console.log(error);
        alert("网络错误，不能访问");
      });

    // 拉取分类商品数据
    axios
      .get("http://jspang.com/DemoApi/typeGoods.php")
      .then(reponse => {
        // 使用箭头函数之后， this就指向了外层的this， 跟作用域就没有关系了
        console.log(reponse);
        // console.log(this);
        this.type0Goods = reponse.data[0];
        this.type1Goods = reponse.data[1];
        this.type2Goods = reponse.data[2];
        this.type3Goods = reponse.data[3];
      })
      .catch(error => {
        // console.log(error);
        alert("网络错误，不能访问");
      });
  },
  mounted: function() {
    this.fullscreenLoading = false; 
    // 所有DOM加载完成之后执行的钩子函数
    var orderHeight = document.body.clientHeight;
    // console.log(orderHeight);
    document.getElementById("order-list").style.height = orderHeight + "px";
  },
  methods: {
    addOrderList(goods) {
      this.totalMoney = 0;
      this.totalCount = 0;
      // 商品是否存在于订单列表中
      let isHave = false;
      for (let i = 0; i < this.tableData.length; i++) {
        // 根据判断编写业务逻辑， 如果有就加数量 否则就加到tableData数组中
        if (this.tableData[i].goodsId == goods.goodsId) {
          isHave = true;
        }
      }
      if (isHave) {
        // 改变列表中商品数量
        let arr = this.tableData.filter(a => a.goodsId == goods.goodsId);
        arr[0].count++;
      } else {
        let newGoods = {
          goodsId: goods.goodsId,
          goodsName: goods.goodsName,
          price: goods.price,
          count: 1
        };
        this.tableData.push(newGoods);
      }
      this.getAllMoney();
    },
    delSingleGoods(goods) {
      // 删除单个商品
      this.tableData = this.tableData.filter(a => a.goodsId != goods.goodsId);
      this.getAllMoney();
    },
    // 汇总金额和数量
    getAllMoney() {
      this.totalCount = 0;
      this.totalMoney = 0;
      if (this.tableData) {
        // 计算汇总金额和数量
        this.tableData.forEach(item => {
          // console.log(item);
          //console.log(this.tableData);
          this.totalCount += item.count;
          this.totalMoney = this.totalMoney + item.count * item.price;
        });
      }
    },
    // 删除全部商品
    delAllGoods() {
        this.tableData = [];
        this.totalCount = 0;
        this.totalMoney = 0;
    },
    // 结账
    checkOut() {
        // 1.设置axios的post方法
        // 2. 接收返回值进行处理
        // 3.如果成功，清空现有构造器里的tableData, totalMoney, totalCount数据
        // 4.进行用户友好的提示
        if( this.totalCount != 0) {
            this.tableData = [];
            this.totalCount = 0;
            this.totalMoney = 0;
            this.$message({   // Element 注册了一个$message方法用于调用，Message 可以接收一个字符串作为参数，它会被显示为正文内容。
                message: '结账成功！ 感谢您又为店里做出了一份力。',
                type: "success"
            })
        } else {
            this.$message.error("不能空结，老板了解你急切的心情！")
        }
    }
  }
};
</script>

<style scoped>
.pos-order {
  background: #f9fafc;
  border-right: 1px solid #c0ccda;
}
.totalDiv {
  text-align: left;
  background-color: #fff;
  border-bottom: 1px solid #d3dce6;
  padding: 10px;
}
.priceSpan {
  margin-left: 10px;
}
.btn-groups {
  margin-top: 10px;
}
.title {
  background-color: #f9fafc;
  border-bottom: 1px solid #d3dce6;
  padding: 10px;
  text-align: left;
  height: 20px;
}

.often-goods-list ul li {
  list-style: none;
  float: left;
  border: 1px solid #e5e9f2;
  margin: 10px;
  padding: 10px;
  background-color: #fff;
  cursor: pointer;
}
.often-price {
  color: #58b7ff;
}
.goodsType {
  clear: both;
}
.cookList {
  overflow: hidden;
}
.cookList li {
  list-style: none;
  border: 1px solid #e5e9f2;
  overflow: hidden;
  background-color: #fff;
  padding: 2px;
  margin: 2px;
  float: left;
  width: 23%;
  height: auto;
  cursor: pointer;
}
.cookList li span {
  display: block;
  float: left;
}
.foodImg {
  width: 40%;
}
.foodName {
  font-size: 16px;
  padding-left: 10px;
  color: brown;
}
.foodPrice {
  font-size: 15px;
  padding-left: 10px;
  padding-top: 10px;
}
</style>

