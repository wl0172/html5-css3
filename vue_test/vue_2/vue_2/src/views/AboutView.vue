<template>
  <div class=" addMemberContainer">
    <h1 class="bigTitle">新增/修改活动-会员权益优惠活动</h1>
    <div class="topTips">
      <h2> 注意：</h2>
      <ul>
        <li>
          （1）会员权益针对全体已注册用户会员购买开发；
        </li>
        <li>
          （2) 购买后，如会员权益与现有的优惠活动相冲突，取优惠力度最大进行优惠；
        </li>
        <li>
          （3）每个油站只能启用一个会员权益活动；
        </li>
        <li>
          （4）用户可购买一张权益卡，每个权益卡只能购买当前或高一等级权益；
        </li>
        <li>
          （5）购买高一等级权益后，原等级未领取权益与优惠作废，以最新购买的会员权益等级为准。
        </li>
      </ul>
    </div>
    <!-- 新增会员权益活动开始 -->
    <div class="FormContent">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="110px" class="demo-ruleForm">
        <!-- 显示内容开始 -->
        <div class="showContents marTop">
          <h3 class="title">显示内容</h3>
          <el-form-item class="activityName" label="权益活动名称" prop="activityName">
            <el-input class="activityTextarea" type="textarea" v-model="ruleForm.activityName" maxlength="100"
              show-word-limit></el-input>
          </el-form-item>
          <el-form-item class="activityDesc" label="权益描述" prop="activityDesc">
            <el-input class="descTextarea" type="textarea" v-model="ruleForm.activityDesc" maxlength="1000"
              show-word-limit></el-input>
          </el-form-item>
        </div>
        <!-- 显示内容结束-->

        <!-- 生效范围开始 -->
        <div class="range marTop">
          <h3 class="title">生效范围</h3>
          <el-form-item label="状态" prop="activityStatus">
            <el-radio-group v-model="ruleForm.activityStatus">
              <el-radio label="启用"></el-radio>
              <el-radio label="停用"></el-radio>
            </el-radio-group>
          </el-form-item>
          <!-- 活动时间开始 -->
          <el-form-item label="活动时间" prop="activityTimeVal">
            <el-date-picker class="selectActivityTime" v-model="ruleForm.activityTimeVal" type="daterange"
              range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyy-MM-dd"
              @change="changeDate">
            </el-date-picker>
            <el-checkbox class="longTerm" v-model="ruleForm.activityChecked" @change="changeTime">长期有效</el-checkbox>
          </el-form-item>
          <div class="repeated">
            <el-form-item label="重复">
              <el-checkbox-group v-model="ruleForm.week" @change="changeWeek">
                <el-checkbox label="星期一" name="week"></el-checkbox>
                <el-checkbox label="星期二" name="week"></el-checkbox>
                <el-checkbox label="星期三" name="week"></el-checkbox>
                <el-checkbox label="星期四" name="week"></el-checkbox>
                <el-checkbox label="星期五" name="week"></el-checkbox>
                <el-checkbox label="星期六" name="week"></el-checkbox>
                <el-checkbox label="星期日" name="week"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </div>
          <div class="timeSlot">
            <el-form-item label="时间段">
              <el-time-picker is-range v-model="ruleForm.timeVal" range-separator="至" start-placeholder="开始时间"
                end-placeholder="结束时间" placeholder="选择时间范围">
              </el-time-picker>
            </el-form-item>
          </div>
          <!-- 活动时间结束 -->
          <!-- 活动对象开始 -->
          <div class="addStation">
            <el-form-item label="活动对象" prop="station_nos">
              <TransferSelect ref="ActivitySelect" v-model="ruleForm.station_nos" button-title="添加油站" dialog-title="选择油站"
                :data="stationList" key-field="station_no" label-field="real_name" :disabled="disabled" filterable
                filter-placeholder="请添加油站" :titles="['未选择', '已选择']" :props="{
                  key: 'key',
                  label: 'lable',
                }" @change-station="changeStation" />
            </el-form-item>
          </div>
          <!-- 活动对象结束 -->

          <!-- 活动规则开始 -->
          <div class="activityRule">
            <h3 class="title">活动规则</h3>
            <p class="tips"><span class="icon">*</span>激活条件（至少选择一个条件）</p>
            <el-form-item label="" prop="activityCard">
              <el-checkbox-group v-model="ruleForm.activityCard" @change="activityCardChange">
                <div class="checkBox">
                  <el-checkbox label="月卡  (31天)" name="activityCard"></el-checkbox>
                  <i class="three"></i>
                  <!-- 新增权益开始 -->
                  <div class="addLevelBox">
                    <div class="top">
                      <el-form-item label="权益等级" prop="level">
                        <el-select v-model="ruleForm.level" placeholder="请选择权益等级">
                          <el-option label="LV1" value="1"></el-option>
                          <el-option label="LV2" value="2"></el-option>
                          <el-option label="LV3" value="3"></el-option>
                        </el-select>
                      </el-form-item>
                      <el-button class="addBtn" type="primary">新增等级</el-button>
                    </div>
                    <div class="addContent">
                      <div class="addPrice">
                        <el-form-item label="权益激活金额" prop="activityPrice">
                          <el-input-number v-model.number="ruleForm.activityPrice" controls-position="right"
                            @change="handleChange" :min="1" :max="999999"></el-input-number>
                          <span class="unit">元</span>
                        </el-form-item>

                        <div class="integralParent">
                          <el-form-item>
                            <el-checkbox-group v-model="ruleForm.integralCheck" @change="integralCheckChange">
                              <el-checkbox label="权益赠送积分" name="integralCheck"></el-checkbox>
                            </el-checkbox-group>
                          </el-form-item>
                          <el-form-item prop="integralInput">
                            <el-input v-model="ruleForm.integralInput" :disabled="integralDisable"></el-input>
                          </el-form-item>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- 新增权益结束-->
                </div>
                <div class="checkBox">
                  <el-checkbox label="季度卡  (93天)" name="activityCard"></el-checkbox>
                  <i class="three"></i>
                </div>
                <div class="checkBox">
                  <el-checkbox label="半年卡  (186天)" name="activityCard"></el-checkbox>
                  <i class="three"></i>
                </div>
                <div class="checkBox">
                  <el-checkbox label="年卡  (366天)" name="activityCard"></el-checkbox>
                  <i class="three"></i>
                </div>

              </el-checkbox-group>
            </el-form-item>
          </div>
          <!-- 活动规则结束 -->
        </div>
        <!-- 生效范围结束 -->
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>

      </el-form>
    </div>
    <!-- 新增会员权益活动结束 -->
  </div>
</template>
<script>
// import { mapActions, mapGetters } from 'vuex'
import TransferSelect from '@/components/TransferSelect'
export default {
  name: 'addMemberBenefits',
  components: {
    TransferSelect,
  },
  data() {
    let validateactivityTime = (rule, value, callback) => {
      console.log(value, "value")
      console.log(this.ruleForm.activityChecked)
      if ((value === null || value === '') && !this.ruleForm.activityChecked) {
        callback(new Error('请选择活动时间'));
      } else {
        console.log("有值")
      }
    };
    const filterStations = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请添加油站'))
      } else {
        callback()
      }
    };
    let validateintegralInput = (rule, value, callback) => {
      console.log(this.ruleForm.integralCheck, "integralCheck")
      console.log(this.ruleForm.integralInput, "integralInput")
      if (this.ruleForm.integralCheck && this.ruleForm.integralInput == '') {
        callback(new Error('请输入权益赠送积分'));
      } else {
        callback()
      }
    };
    return {
      ruleForm: {
        activityName: '', // 活动名称
        activityDesc: '', // 权益描述
        activityStatus: "", // 生效范围状态
        activityTimeVal: '', // 活动时间
        activityChecked: false, // 长期有效
        week: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'], // 选择重复星期
        timeVal: [new Date(2016, 9, 10, 0, 0), new Date(2016, 9, 10, 23, 59)], // 时间段的选择
        station_nos: '', // 加油站
        activityCard: [], // 活动卡
        level: '', // 权益等级
        activityPrice: 1, // 权益金额
        integralCheck: '', // 权益积复选框
        integralInput: '', // 权益积分输入框
      },
      integralDisable: true, // 权益积分输入框禁止输入
      rules: {
        activityName: [
          { required: true, message: '请填写权益活动名称', trigger: 'blur' }
        ],
        activityDesc: [
          { required: true, message: '请填写权益描述' }
        ],
        activityStatus: [
          { required: true, message: '请选择状态', trigger: 'change' }
        ],
        activityTimeVal: [
          { validator: validateactivityTime, required: true, trigger: 'change' }
        ],
        station_nos: [
          { required: true, validator: filterStations, message: '请添加商户/油站', trigger: 'change' }
        ],
        activityCard: [
          { type: 'array', required: true, message: '请至少选择一个活动卡', trigger: 'change' }
        ],
        level: [
          { required: true, message: '请选择权益等级', trigger: 'change' }
        ],
        activityPrice: [
          { required: true, message: '请输入权益激活金额', trigger: 'blur' }
        ],
        integralInput: [
          {
            validator: validateintegralInput, message: '请输入权益赠送积分', trigger: 'blur'
          }
        ]
        // week: [
        //   { type: 'array', required: true, message: '请权益激活金额', trigger: 'change' }
        // ]
      }
    }
  },
  async created() {
    this.getStationList({})
  },
  methods: {
    ...mapActions({
      getStationList: 'station/getStationList',
    }),
    submitForm(formName) {
      console.log(this.ruleForm.activityPrice, "activityPrice")
      this.$refs[formName].validate((valid) => {
        console.log(valid, "valid")
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    //改变长期有效复选框
    changeTime() {
      console.log('改变复选框')
      if (this.ruleForm.activityChecked) {
        this.ruleForm.activityTimeVal = ''
      }
    },
    // 改变活动时间
    changeDate() {
      console.log('改变活动时间')
      if (this.ruleForm.activityTimeVal) {
        this.ruleForm.activityChecked = false
      }
    },
    // 改变星期一至星期日的时间选中
    changeWeek(value) {
      console.log(value)
    },
    // 改变活动规则卡
    activityCardChange(value) {
      console.log(value)
    },
    // 改变权益金额
    handleChange(value) {
      console.log(value);
      // this.ruleForm.activityPrice = value
    },
    //改变权益赠送积分
    integralCheckChange(val) {
      console.log(this.ruleForm.integralCheck, "integralCheck")
      if (val) {
        console.log(val, "integralCheck")
        this.integralDisable = false
      } else {
        this.integralDisable = true
      }
    }
  },
  computed: {
    ...mapGetters({
      stationList: 'station/stationList',

    })
  },
}
</script>

<style>
.el-time-spinner__item {
  height: 30px !important;
  line-height: 15px !important;
}
</style>