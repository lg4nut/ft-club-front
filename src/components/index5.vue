<template>
  <div>
  <div align="center" class="top">
    <el-form :inline="true" :model="formInline" class="demo-form-inline"  label-width="100px" size="mini">
      <i class="el-icon-user"></i><el-form-item>
        <el-input v-model="formInline.user" placeholder="账号/手机号/邮箱"></el-input>
      </el-form-item>
      <i class="el-icon-lock"></i><el-form-item>
        <el-input v-model="formInline.user" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登陆</el-button>
           <el-link type="danger">免费注册</el-link>
        ｜<el-link href="https://www.163.com" target="_blank">忘记密码</el-link>
      </el-form-item>
    </el-form>
  </div>
    <el-divider></el-divider>
    <div align="center" style="margin-top:0px">
    <el-table
    v-loading="listLoading"
    ref="singleTable"
    :data="fixtures"
    style="width: 92%"
    :border=false
    :resizable=false
    :header-cell-style="{background:'#f4f4f5',color:'#93969b'}"
    :cell-class-name="leagueClass"
    :row-class-name="rowClass"
  >
    <el-table-column
      type="selection"
      width="45"
      align="center"
    >
    </el-table-column>

    <el-table-column
      align="center"
      prop="fixture"
      label="赛事"
      width="80">
      <template slot-scope="scope">
      {{ scope.row.league}}
      </template>
    </el-table-column>

    <el-table-column
      prop="stage"
      label="轮次"
      width="80">
    </el-table-column>

    <el-table-column
      align="center"
      prop="begintime"
      label="时间"
      width="145">
      <template slot="header" slot-scope="scope">
       时间 <i class="el-icon-time"></i>
      </template>
      <template slot-scope="scope">
         <span style="margin-left: 10px">{{scope.row.begintime| formatDate}}</span>
      </template>

    </el-table-column>
    <el-table-column
      align="center"
      prop="state"
      label="状态	"
      width="74">
      <template slot-scope="scope">
        <div  :ref="scope.row.fixture_id+'state'">{{scope.row.state}}</div>
      </template>
    </el-table-column>
    <el-table-column
      prop="localteam"
      align="center"
      label="主队	"
      width="130">
      <template slot-scope="scope">
      <span v-show="false" class="redcard" :ref="'redcard'+scope.row.fixture_id">{{cardCount}}</span> {{ scope.row.localteam }}
      </template>
    </el-table-column>
    <el-table-column
      align="center"
      prop="ft_score"
      label="比分	"
      width="80">
      <template slot-scope="scope">
        <div class="ftscore" :ref="'ftscore'+scope.row.fixture_id">{{scope.row.ft_score}}</div>
      </template>
    </el-table-column>
    <el-table-column
      prop="visitorteam"
      label="客队	"
      width="130"
    align="center">
      <template slot-scope="scope">
        {{ scope.row.visitorteam}}<span v-show="false" class="yellowcard" :ref="scope.row.fixture_id+'yellowcard'">1</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="ht_score"
      label="半场	"
      width="80">
    </el-table-column>
    <el-table-column
      prop="homeIndex"
      label="指数	"
      width="65">
      <template slot-scope="scope">
        <div class="odds1" :ref="'home'+scope.row.fixture_id">{{scope.row.home_value}}</div>
        <div class="odds2" ref="undervalue">{{scope.row.under_value}}</div>
      </template>
    </el-table-column>

    <el-table-column
      prop="Bet365"
      label="Bet365"
      width="80">
      <template slot-scope="scope">
      <div class="odds1" >{{scope.row.handicap}}</div>
      <div class="odds2">{{scope.row.total}}</div>
      </template>
    </el-table-column>
    <el-table-column
      prop="awayIndex"
      label="指数"
      width="65">
      <template slot-scope="scope">
        <div class="odds1" :ref="'away'+scope.row.fixture_id">{{scope.row.away_value}}</div>
        <div class="odds2">{{scope.row.over_value}}</div>
      </template>
    </el-table-column>
    <el-table-column
      prop="analysis"
      label="分析	"
      width="93">
      析 亚 欧 大
    </el-table-column>
    <el-table-column
      prop="liveLink"
      label="直播"
      width="62">
      <template slot-scope="scope">
        <div style="text-align: center">
        <img  src="../../static/images/zd.gif" alt="查看" style="margin: 0 auto;" >
        </div>
      </template>
    </el-table-column>
    <el-table-column
      align="center"
      prop="toKeep"
      label="置顶"
      width="115">
      <i class="el-icon-star-off"></i> <el-tag align="right" size="mini" closable>标签</el-tag>
    </el-table-column>


  </el-table>
  </div>
  </div>
</template>

<style>

  /*.living {*/
    /*background: transparent url(../../../static/images/live.gif) no-repeat 99% 5%;*/
  /*}*/
  .el-divider--horizontal{
    margin: 8px 0;
  }
  .top{
    height: 25px;
  }
  .ftscore{
    color: #6d6d73;
    text-align: center;
    FONT-WEIGHT: bold;
    cursor: pointer;
    FONT-FAMILY: verdana;
    font-size: large;
  }
  .odds1 {
    color: #880000;
    text-align:center;
  }
  .odds2 {
    color: Black;
    text-align:center;
  }
  .el-table .hover {
    background: #f0f0f1;
  }
  .el-table--border, .el-table--group {
     border: 1px solid #dee1e8;
   }
  .el-table td, .el-table th.is-leaf {
    border: 1px solid #dee1e8;
  }
  .el-table__header tr,
  .el-table__header th {
    padding: 0;
    height: 40px;
  }
  .el-table__body tr,
  .el-table__body td {
    padding: 0;
    height: 40px;
  }
  .el-table th.gutter{
    display: table-cell!important;
  }
  .yellowcard {
    background: #FEE600;
    color: #973300;
    margin: 1px;
    border: 1px solid #C08160;
    padding: 0 1px;
    display: inline-block;
  }
  .redcard {
    background: #FF3900;
    color: #fff;
    margin: 1px;
    border: 1px solid #B13B3B;
    padding: 0 1px;
    display: inline-block;
  }
  .tc{background: #baeef4}
  .hj{background: #dddeba}
  .fj{background: #dec5d2}
  .sj{background: #a2d8de}
  .pc{background: #dddeba}
  .by{background: #36ffae}
  .bj{background: #29b8f5}
  .yg{background: #53deda}
  .ogb{background: #e6ade6}
  .olbb{background: #8cdea8}
  .dmc{background: #ab64ff}
  .dmj{background: #ffaee5}
  .bybg{background: rgb(196,196,196)}
  .rzlbg{background: #71afb0;}
  .ycbg  {background: #f4c0be;}
  .djbg {background: #95f457;}
  .zcbg {background: #f4a117;}
  .fjbg {background: #2cf4ca;}
  .xb {background: #f488ba;}

  .up {
    background-color: #ff7b7e;}
  .down{
    background-color: #5cff9e;}

</style>

<script>
  import {getFixtures} from "../api/fixture"
  import {formatDate} from '../utils/date';
  //console.log(this.$refs.home);

  export default {
  filters: {
      formatDate(time) {
        var date = new Date(time);
        return formatDate(date, 'yyyy-MM-dd hh:mm');
      }
    },
    methods: {
      handleGoal(row) {
        //  alert(row.fid);
        let homeGoal = 1;
        this.$message({
          message: homeGoal ? row.homeTeam + "进球!" : row.awayTeam + "进球!",
          center: true,
          type: 'warning',
          showClose: true
        });
      },
      rowClass({ row, rowIndex }) {
        if (rowIndex % 2 === 1) {
          return 'hover';
        }
        return '';
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },

      leagueClass({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 1 && row.league === "巴乙") {
          return 'bybg'
        } else if (columnIndex === 1 && row.league === "英超") {
          return 'ycbg'
        } else if (columnIndex === 1 && row.league === "德甲") {
          return 'djbg'
        } else if (columnIndex === 1 && row.league === "日职联") {
          return 'rzlbg'
        } else if (columnIndex === 1 && row.league === "中超") {
          return 'zcbg'
        } else if (columnIndex === 1 && row.league === "意甲") {
          return 'zcbg'
        } else if (columnIndex === 1 && row.league === "英足总杯") {
          return 'rzlbg'
        } else if (columnIndex === 1 && row.league === "丹麦甲") {
          return 'dmj'
        }else if (columnIndex === 1 && row.league === "丹麦超") {
            return 'dmc'
        } else if (columnIndex === 1 && row.league === "比乙") {
          return 'by'
        } else if (columnIndex === 1 && row.league === "比甲") {
          return 'bj'
        } else if (columnIndex === 1 && row.league === "英冠") {
          return 'yg'
        }else if (columnIndex === 1 && row.league === "欧冠杯") {
          return 'ogb'
        }else if (columnIndex === 1 && row.league === "欧罗巴杯") {
          return 'olbb'
        }else if (columnIndex === 1 && row.league === "土超") {
          return 'tc'
        }else if (columnIndex === 1 && row.league === "法甲") {
          return 'fj'
        }else if (columnIndex === 1 && row.league === "荷甲") {
          return 'hj'
        }else if (columnIndex === 1 && row.league === "西甲") {
          return 'sj'
        }else if (columnIndex === 1 && row.league === "葡超") {
          return 'pc'
        }else if (columnIndex === 1 && row.league === "西杯") {
         return 'xb'
        }
        ;

      },
      getFixtures() {
        // let para = {
        //   page: this.page,
        //   name: this.filters.name
        // };
        this.listLoading = true;
        //NProgress.start();
        getFixtures().then((response) => {
          //this.total = res.data.total;
          this.fixtures = response.items;
          this.fixtures.push(this.fixture);
          this.fixtures.push (this.fixture2);
          this.fixtures.push(this.fixture3);
          this.fixtures.push(this.fixture4);
          this.fixtures.push(this.fixture5);
          // this.fixtures.push(this.fixture6);
          // this.fixtures.push(this.fixture7);
          // this.fixtures.push(this.fixture8);
          // this.fixtures.push(this.fixture11);
          // this.fixtures.unshift(this.fixture12);
          // this.fixtures.unshift(this.fixture13);
          // this.fixtures.unshift(this.fixture14);
          // this.fixtures.unshift(this.fixture15);
          // this.fixtures.unshift(this.fixture16);
          // this.fixtures.unshift(this.fixture17);



          this.listLoading = false;
        });
      },
      timestampToTime(timestamp) {
        if(timestamp)
        var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        Y = date.getFullYear() + '-';
        M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        D = date.getDate() + ' ';
        h = date.getHours() + ':';
        m = date.getMinutes() + ':';
        s = date.getSeconds();
        return Y + M + D + h + m + s;
      },
      transparentOdd(fid){
        const TIME_COUNT =3;
        let timer =false;
        if(!timer){
          let count = TIME_COUNT;
           timer = setInterval(()=>{
            if( count > 0 && count <= TIME_COUNT){
               count--;
            }else{
              //this.show = true;
              clearInterval(timer);
              timer = null;
              this.$refs[`home${fid}`].style.background = 'transparent';
              this.$refs[`away${fid}`].style.background = 'transparent';
            }
          },1000)
        }
      },
      transparentScore(fid) {
        const TIME_COUNT = 4;

        if(!this.timer2){
          let count2 = TIME_COUNT;
          this.timer2 = setInterval(()=>{
            if(count2 > 0 && count2 <= TIME_COUNT){
              count2--;
            }else{
              //this.show = true;
              clearInterval(this.timer2);
              this.timer2 = null;
              this.$refs[`ftscore${fid}`].style.background ='transparent';
            }
          },1000)
        }
      },
      },

      data() {
        return {
          formInline: {
            user: '',
            region: ''
          },
          listLoading: false,
          fixtures: [],
          show:true,
          stateShow:false,
          cardCount:0,
          fixture: {
            away_value: 1.91,
            begintime:1578745800000,
            ft_score: "1-1",
            handicap: "-2.25",
            home_value: 1.89,
            ht_score: "0-1",
            fixture_id: 10000,
            league: "英超",
            localteam: "水晶宫",
            over_value: "1.97",
            round: "6",
            stage: "测试",
            state: "demo",
            total: "2.75",
            under_value: "1.86",
            visitorteam: "阿森纳"
          },
          fixture2:{
            away_value: 1.91,
            begintime: 1578745800000,
            ft_score: "1-2",
            handicap: "-2.25",
            home_value: 1.89,
            ht_score: "0-1",
            fixture_id: 10001,
            league: "英超",
            localteam: "莱斯特城",
            over_value: "1.93",
            round: "6",
            stage: "测试",
            state: "demo",
            total: "2.75",
            under_value: "1.86",
            visitorteam: "南安普敦"
          },
          fixture3:{
            away_value: 1.91,
            begintime: 1578745800000,
            ft_score: "4-0",
            handicap: "-2.25",
            home_value: 1.89,
            ht_score: "1-0",
            fixture_id: 10002,
            league: "英超",
            localteam: "曼联",
            over_value: "1.97",
            round: "6",
            stage: "测试",
            state: "demo",
            total: "2.75",
            under_value: "1.86",
            visitorteam: "诺维奇"
          },
          fixture4:{
            away_value: 1.91,
            begintime: 1578745800000,
            ft_score: "1-1",
            handicap: "-2.25",
            home_value: 1.89,
            ht_score: "0-0",
            fixture_id: 10003,
            league: "意甲",
            localteam: "拉齐奥",
            over_value: "1.97",
            round: "6",
            stage: "测试",
            state: "demo",
            total: "2.75",
            under_value: "1.86",
            visitorteam: "那不勒斯"
          },
          fixture5:{
            away_value: 1.91,
            begintime: 1578745800000,
            ft_score: "1-1",
            handicap: "-2.25",
            home_value: 1.89,
            ht_score: "0-0",
            fixture_id: 10004,
            league: "意甲",
            localteam: "国际米兰",
            over_value: "1.97",
            round: "6",
            stage: "测试",
            state: "demo",
            total: "2.75",
            under_value: "1.86",
            visitorteam: "亚特兰大"
          }
        }
      },
      mounted() {
        this.getFixtures();
      //  console.log(this.fixture);
        //this.addFixture(this.fixture);
        this.sockets.subscribe('odd', (data) => {
          let fid = data[0];
          let index = this.fixtures.findIndex(item => item.fixture_id ==fid);
          this.fixtures[index].home_value = data[1];
          this.fixtures[index].away_value = data[2];
          this.$refs[`home${fid}`].style.background = '#ff7676';
          this.$refs[`away${fid}`].style.background = '#95ff86';
          // this.$refs[`playBtn${fid}`].innerHTML=" <span class='up'>"+data[1]+"</span>";
          this.transparentOdd(fid);

        });
        this.sockets.subscribe('goal',(data2)=>{
          let fid = data2[0];
          let index = this.fixtures.findIndex(item => item.fixture_id == data2[0]);
          this.fixtures[index].ft_score= data2[1];
         // console.log(this.fixtures[index]);
          this.$refs[`ftscore${fid}`].style.background = '#f4a117';
          this.transparentScore(fid);

          this.$notify({
            title:　"提示",
            message: this.fixtures[index].localteam +"进球！",
           // offset: 100,
            position: 'bottom-right'

          });

        });
        this.sockets.subscribe('card',(data3)=>{
          let fid = data3[0];
          let index =this.fixtures.findIndex(item => item.fixture_id == data3[0]);
          if(data3[1]=="red"&&data3[2]!=0) {
            this.$refs[`redcard${fid}`].style.display = 'inline';
            this.$refs[`redcard${fid}`].innerHTML = data3[2];
          }else if (data3[1]=="yellow"&&data3[2]!=0){
            this.$refs[`${fid}yellowcard`].style.display='inline';
            this.$refs[`redcard${fid}`].innerHTML=data3[2];
          }else if (data3[1]=="yellow"&&data3[2]==0){
            this.$refs[`${fid}yellowcard`].style.display='none';
          }

        });
        this.sockets.subscribe('state',(data4)=>{
          let fid =data4[0];
          let index =this.fixtures.findIndex(item => item.fixture_id == data4[0]);
          this.$refs[`${fid}state`].innerHTML=data4[1]+" ’";
        //  this.$refs[`${fid}inplay`].style.display='inherit';

        });
      },
      updated(){
     // this.fixtures.unshift(this.item);
    }
  }

</script>
