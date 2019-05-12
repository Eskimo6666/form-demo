
$(document).ready(function () {
    console.log(6)
    $("#tablist li").each(function (index) {

        $(this).click(function () {

            console.log(3)
            $(".contentin").removeClass("contentin");
            $(".tabin").removeClass("tabin");
            $(".content-box > div").eq(index).addClass("contentin");
            $(this).addClass("tabin")
        });
    })
})

$('button').on('click', function () {
    
})
new Vue({
    el: '.bilateral',
    data: function () {
        return {
            visible: false, radio: '1', radio1: '上海',
            radio2: '上海',
            radio3: '上海',
            radio4: '上海',
            options: [{
                value: '选项1',
                label: '中国'
            }, {
                value: '选项2',
                label: '美国'
            }, {
                value: '选项3',
                label: '西班牙'
            }, {
                value: '选项4',
                label: '新加坡'
            }, {
                value: '选项5',
                label: '泰国'
            }],
            value: '',
            options1: [{
                value: '选项1',
                label: '身份证'
            }, {
                value: '选项2',
                label: '护照'
            }, {
                value: '选项3',
                label: '驾驶证'
            }, {
                value: '选项4',
                label: '结婚证'
            }, {
                value: '选项5',
                label: '房产证'
            }],
            value1: '',
            options2: [{
                value: '选项1',
                label: '汉族'
            }, {
                value: '选项2',
                label: '满族'
            }, {
                value: '选项3',
                label: '朝鲜族'
            }, {
                value: '选项4',
                label: '布依族'
            }, {
                value: '选项5',
                label: '维吾尔族'
            }],
            value2:'',
            options4: [{
                value: '选项1',
                label: '在读'
            }, {
                value: '选项2',
                label: '借读'
            }],
            value4:'',
            options5: [{
                value: '选项1',
                label: '男'
            }, {
                value: '选项2',
                label: '女'
            }],
            value5:'',
            options7: [{
                value: '选项1',
                label: '党员'
            }, {
                value: '选项2',
                label: "团员"
            },{
                value: '选项2',
                label: '群众'
            }],
            value7:'',
            options8: [{
                value: '选项1',
                label: '毕业'
            }, {
                value: '选项2',
                label: '在读'
            }],
            radio: '1',
            value8:'',
            options9: [{
                value: '选项1',
                label: 'O型'
            }, {
                value: '选项2',
                label: "A型"
            },{
                value: '选项2',
                label: 'B型'
            }],
            value9:'',
            pickerOptions: {
                disabledDate(time) {
                  return time.getTime() > Date.now();
                },
                shortcuts: [{
                  text: '今天',
                  onClick(picker) {
                    picker.$emit('pick', new Date());
                  }
                }, {
                  text: '昨天',
                  onClick(picker) {
                    const date = new Date();
                    date.setTime(date.getTime() - 3600 * 1000 * 24);
                    picker.$emit('pick', date);
                  }
                }, {
                  text: '一周前',
                  onClick(picker) {
                    const date = new Date();
                    date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                    picker.$emit('pick', date);
                  }
                }]
              },
              
              value3: '',
        }
        
    }
})
