import Mock from 'mockjs'

export default [
  {
    url: '/finance/update',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },

  {
    url: '/finance/dzzb',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: [
          {
            'kjdzzbbh': '4406047020012019',
            'kjdzzbmc': '演示市演示区中国共产党演示市演示区委员会组织部20192019',
            'kjqj': [
              {
                'kjnd': 2018,
                'kjyf': [
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                  7,
                  8
                ]
              },
              {
                'kjnd': 2019,
                'kjyf': [
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11,
                  12
                ]
              }
            ]
          }, {
            'kjdzzbbh': '4406047021012019',
            'kjdzzbmc': '演示市演示区中国共产党演示市演示区委员会宣传部20192019',
            'kjqj': [
              {
                'kjnd': 2019,
                'kjyf': [
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11,
                  12
                ]
              }
            ]
          }
        ]
      }
    }
  },
  {
    url: '/finance/kmbm',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: [
          {
            'kjkmbm': '1001',
            'kjkmmc': '库存现金'
          },
          {
            'kjkmbm': '100101',
            'kjkmmc': '非受托代理资产'
          },
          {
            'kjkmbm': '10010101',
            'kjkmmc': '基本户现金'
          },
          {
            'kjkmbm': '10010102',
            'kjkmmc': '零余额现金'
          }
        ]
      }
    }
  },
  // 财务查询表格接口
  {
    url: '/finance/tables',
    type: 'post',
    response: config => {
      console.log(config)
      const datas = {
        total: 632,
        listQuery: {
          page: 1,
          limit: 10
        },
        tableHead: [
          {
            column_name: 'column_name', column_comment: '科目编号'
          },
          {
            column_name: 'column_age', column_comment: '科目名称'
          },
          {
            column_name: 'column_sex', column_comment: '开始期间'
          },
          {
            column_name: 'column_sex', column_comment: '结束期间'
          },
          {
            column_name: 'column_sex', column_comment: '期初借方金额'
          },
          {
            column_name: 'column_sex', column_comment: '期初贷方金额'
          },
          {
            column_name: 'column_sex', column_comment: '借方发生额'
          },
          {
            column_name: 'column_sex', column_comment: '贷方发生额'
          },
          {
            column_name: 'column_sex', column_comment: '期末借方金额'
          },
          {
            column_name: 'column_sex', column_comment: '期末贷方余额'
          },
          {
            column_name: 'column_sex', column_comment: '账套编号'
          },
          {
            column_name: 'column_sex', column_comment: '账套名称'
          }
        ],
        tableData: [{
          column_age: '3123',
          column_name: '鞠婧祎鞠婧祎鞠婧祎鞠婧祎鞠婧祎鞠婧祎',
          column_sex: '女鞠婧祎'
        },
        {
          column_age: '25',
          column_name: '魏大勋',
          column_sex: '男魏大勋魏大勋魏大勋魏大勋魏大勋魏大勋'
        },
        {
          column_age: '18',
          column_name: '关晓彤鞠婧祎',
          column_sex: '女魏大勋魏大勋魏大勋魏大勋魏大勋魏大勋魏大勋魏大勋魏大勋魏大勋'
        },
        {
          column_age: '18',
          column_name: '关晓彤鞠婧祎',
          column_sex: '女魏大勋魏大勋魏大勋魏大勋魏大勋魏大勋魏大勋魏大勋魏大勋魏大勋'
        },
        {
          column_age: '18',
          column_name: '关晓彤鞠婧祎',
          column_sex: '女魏大勋魏大勋魏大勋魏大勋魏大勋魏大勋魏大勋魏大勋魏大勋魏大勋'
        },
        {
          column_age: '18',
          column_name: '关晓彤鞠婧祎',
          column_sex: '女魏大勋魏大勋魏大勋魏大勋魏大勋魏大勋魏大勋魏大勋魏大勋魏大勋'
        },
        {
          column_age: '18',
          column_name: '关晓彤鞠婧祎',
          column_sex: '女魏大勋魏大勋魏大勋魏大勋魏大勋魏大勋魏大勋魏大勋魏大勋魏大勋'
        },
        {
          column_age: '18',
          column_name: '关晓彤鞠婧祎',
          column_sex: '女魏大勋魏大勋魏大勋魏大勋魏大勋魏大勋魏大勋魏大勋魏大勋魏大勋'
        },
        {
          column_age: '18',
          column_name: '关晓彤鞠婧祎',
          column_sex: '女魏大勋魏大勋魏大勋魏大勋魏大勋魏大勋魏大勋魏大勋魏大勋魏大勋'
        },
        {
          column_age: '18',
          column_name: '关晓彤鞠婧祎',
          column_sex: '女魏大勋魏大勋魏大勋魏大勋魏大勋魏大勋魏大勋魏大勋魏大勋魏大勋'
        }]
      }
      return {
        code: 20000,
        data: datas
      }
    }
  },
]

