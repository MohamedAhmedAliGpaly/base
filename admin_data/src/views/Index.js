import Inc from '@/library/Inc'
import G2 from '@antv/g2'

export default {
  data(){
    return {
      menus: {},  // 快捷方式
      msg:[],     // 我的消息
      total: {},  // 数据统计
      ratio: {s1:{},s2:{},s3:{}},  // 效益报告
      // 统计图
      chart:{one:null,two:null,three:null},
    }
  },
  mounted(){
    this.getMenus();  // 快捷方式
    this.loadData();  // 加载数据
  },
  methods:{

    /* 加载数据 */
    loadData(){
      Inc.post('Desktop/index',{token:Inc.storage.getItem('token')},(res)=>{
        let d = res.data;
        if(d.code==0){
          // 统计
          this.total = d.total;
          // 比例
          this.ratio = d.ratio;
          // 消息
          this.msg = d.msg;
          // 图表统计
          setTimeout(()=>{
            this.chartOne(d.day);
            this.chartTwo(d.gender);
            this.chartThree(d.room);
          },500);
        }
      });
    },

    /* 快捷方式 */
    getMenus(){
      let menus = JSON.parse(Inc.storage.getItem('Menus') || '[]');
      this.menus = menus.reverse();
    },
    /* 跳转地址 */
    openUrl(ico,url,index,name){
      // 保存-当前位置
      Inc.storage.setItem('MenuName',name);
      Inc.storage.setItem('defaultMenu',index);
      this.$store.state.defaultMenu = index;
      // 保存-快捷方式
      if(index!='3'){
        let menus = JSON.parse(Inc.storage.getItem('Menus') || '[]');
        let data = {ico:ico,url:url,index:index,name:name};
        const n = menus.findIndex((item)=>JSON.stringify(item)==JSON.stringify(data));
        if(n>=0) menus.splice(n,1);
        menus.push({ico:ico,url:url,index:index,name:name});
        // 保存
        Inc.storage.setItem('Menus',JSON.stringify(menus));
      }
      // 跳转
      this.$router.push(url);
    },

    // 统计图1
    chartOne(data){
      if(!this.chart.one){
        this.chart.one = new G2.Chart({container: 'chart',forceFit: true,height: 320,padding: [30,50,80,50]});
        this.chart.one.interval().position('x*y').color('x');
      }
      this.chart.one.source(data).tooltip({showTitle: false});
      this.chart.one.render();
    },
    // 统计图2
    chartTwo(data){
      if(!this.chart.two){
        this.chart.two = new G2.Chart({container: 'chart1',forceFit: true,height: 240,padding: [50,20,50,20]});
        this.chart.two.coord('theta');
        this.chart.two.tooltip({showTitle: false});
        this.chart.two.intervalStack().position('y').color('x').label('y').tooltip('x*num', function(name,num) {
          return {name: name,value: num+'人'};
        }).style({lineWidth: 1,stroke: '#FFF'});
      }
      this.chart.two.source(data);
      this.chart.two.render();
    },
    // 统计图3
    chartThree(data){
      if(!this.chart.three){
        this.chart.three = new G2.Chart({container: 'chart2',forceFit: true,height: 240,padding: [-20,-20,-40,-20]});
        this.chart.three.coord('polar',{radius: 0.6});
        this.chart.three.axis('num', {label: null,tickLine: null,line: {stroke: '#E9E9E9',lineDash: [3,3]}});
        this.chart.three.interval().position('name*num').color('name').label('num', {
          offset: -15,
          textStyle: {textAlign: 'center',fontSize: 11,shadowBlur: 2,shadowColor: 'rgba(0, 0, 0, .45)'}
        }).style({lineWidth: 1,stroke: '#fff'});
      }
      this.chart.three.source(data).tooltip({showTitle: false});
      this.chart.three.render();
    },

  }
}