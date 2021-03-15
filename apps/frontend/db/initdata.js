var wenjuandiaocha = db.getSiblingDB("wenjuandiaocha");

// 页面自定义初始化脚本
wenjuandiaocha.timus.insertMany([
  {
    block: "一、妇女发展",
    category: "（―）您的个人情况",
    title: "1、您的年龄：",
    mode: "radio",
    options: [
      {
        label: "A、20岁以下",
        value: "A、20岁以下",
      },
      {
        label: "B、21至30岁",
        value: "B、21至30岁",
      },
      {
        label: "C、31至40岁",
        value: "C、31至40岁",
      },
      {
        label: "D、41至50岁",
        value: "D、41至50岁",
      },
      {
        label: "E、50岁以上",
        value: "E、50岁以上",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（―）您的个人情况",
    title: "2、您的户口所在地：",
    mode: "radio",
    options: [
      {
        label: "A、城市",
        value: "A、城市",
      },
      {
        label: "B、农村",
        value: "B、农村",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（二）经济活动及就业方面",
    title: "1、您的职业：",
    mode: "radio",
    options: [
      {
        label: "A、公司或企业职员",
        value: "A、公司或企业职员",
      },
      {
        label: "B、农民",
        value: "B、农民",
      },
      {
        label: "C、公务员",
        value: "C、公务员",
      },
      {
        label: "D、私营业主",
        value: "D、私营业主",
      },
      {
        label: "E、自由职业",
        value: "E、自由职业",
      },
      {
        label: "F、下岗待业",
        value: "F、下岗待业",
      },
      {
        label: "G、家庭主妇",
        value: "G、家庭主妇",
      },
      {
        label: "H、离退休",
        value: "H、离退休",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（二）经济活动及就业方面",
    title: "2、您的工资年收入较上一年度是否有所提高：",
    mode: "radio",
    options: [
      {
        label: "A、提高了",
        value: "A、提高了",
      },
      {
        label: "B、基本持平",
        value: "B、基本持平",
      },
      {
        label: "C、降低了",
        value: "C、降低了",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（二）经济活动及就业方面",
    title: "3、您是否知道扶持妇女就业创业出台的妇女小额担保贴息贷款政策：",
    mode: "radio",
    options: [
      {
        label: "A、知道，已贷款",
        value: "A、知道，已贷款",
      },
      {
        label: "B、知道，未贷款",
        value: "B、知道，未贷款",
      },
      {
        label: "C、听说过",
        value: "C、听说过",
      },
      {
        label: "D、不知道",
        value: "D、不知道",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（二）经济活动及就业方面",
    title: "4、您所在的村、社区为妇女就业与再就业做过哪些工作：",
    mode: "radio",
    options: [
      {
        label: "A、提供就业信息",
        value: "A、提供就业信息",
      },
      {
        label: "B、组织培训",
        value: "B、组织培训",
      },
      {
        label: "C、向相关企事业单位推荐",
        value: "C、向相关企事业单位推荐",
      },
      {
        label: "D、与劳动和社会保障部门沟通采取保障妇女就业与再就业的可行措施",
        value: "D、与劳动和社会保障部门沟通采取保障妇女就业与再就业的可行措施",
      },
      {
        label: "E、什么也没做",
        value: "E、什么也没做",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（二）经济活动及就业方面",
    title: "5、您认为影响妇女就业与再就业的主要因素有：",
    mode: "radio",
    options: [
      {
        label: "A、国家、省市相关政策",
        value: "A、国家、省市相关政策",
      },
      {
        label: "B、用人单位的男女平等观念",
        value: "B、用人单位的男女平等观念",
      },
      {
        label: "C、妇女自身的能力与条件",
        value: "C、妇女自身的能力与条件",
      },
      {
        label: "D、一定社会背景下妇女的就业观念",
        value: "D、一定社会背景下妇女的就业观念",
      },
      {
        label: "E、家庭的影响",
        value: "E、家庭的影响",
      },
      {
        label: "F、本地区经济环境不好，缺乏就业机会",
        value: "F、本地区经济环境不好，缺乏就业机会",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（二）经济活动及就业方面",
    title: "6、您在就业与再就业方面希望妇女组织提供什么样的帮助：",
    mode: "radio",
    options: [
      {
        label: "A、完全依靠妇女组织实现就业与再就业",
        value: "A、完全依靠妇女组织实现就业与再就业",
      },
      {
        label: "B、在妇女组织的指导与帮助下实现就业与再就业",
        value: "B、在妇女组织的指导与帮助下实现就业与再就业",
      },
      {
        label: "C、不需要妇女组织的帮助，完全靠自己实现就业与再就业",
        value: "C、不需要妇女组织的帮助，完全靠自己实现就业与再就业",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（二）经济活动及就业方面",
    title: "7、在就业过程中，您是否遇到过就业歧视：",
    mode: "radio",
    options: [
      {
        label: "A、是 ",
        value: "A、是 ",
      },
      {
        label: "B、否",
        value: "B、否",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（二）经济活动及就业方面",
    title: "8、就您所了解的，用人单位为何会有性别歧视的观念和做法？",
    mode: "radio",
    options: [
      {
        label: "A、女性有婚育等特殊的生理时期",
        value: "A、女性有婚育等特殊的生理时期",
      },
      {
        label: "B、女性在体力、智力等方面不如男性",
        value: "B、女性在体力、智力等方面不如男性",
      },
      {
        label: "C、女性人身安全较之男性难以保证",
        value: "C、女性人身安全较之男性难以保证",
      },
      {
        label: "D、其他",
        value: "D、其他",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（二）经济活动及就业方面",
    title: "9、您的就业观念是？",
    mode: "radio",
    options: [
      {
        label: "A、到外地大城市去就业",
        value: "A、到外地大城市去就业",
      },
      {
        label: "B、在本地离家较近的地方打工",
        value: "B、在本地离家较近的地方打工",
      },
      {
        label: "C、不愿外出就业",
        value: "C、不愿外出就业",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（二）经济活动及就业方面",
    title: "10、您是否参加过就业培训？",
    mode: "radio",
    options: [
      {
        label: "A、参加过 ",
        value: "A、参加过 ",
      },
      {
        label: "B、没参加过,也不想参加 ",
        value: "B、没参加过,也不想参加 ",
      },
      {
        label: "C、没参加过,想要参加",
        value: "C、没参加过,想要参加",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（二）经济活动及就业方面",
    title: "11、您所参加的就业培训是由谁组织的？",
    mode: "radio",
    options: [
      {
        label: "A、当地政府 ",
        value: "A、当地政府 ",
      },
      {
        label: "B、企业 ",
        value: "B、企业 ",
      },
      {
        label: "C、个人意愿",
        value: "C、个人意愿",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（二）经济活动及就业方面",
    title: "12、您的就业途径是？",
    mode: "radio",
    options: [
      {
        label: "A、亲戚朋友   ",
        value: "A、亲戚朋友   ",
      },
      {
        label: "B、中介机构推荐",
        value: "B、中介机构推荐",
      },
      {
        label: "C、用人单位招工 ",
        value: "C、用人单位招工 ",
      },
      {
        label: "D、政府或企业安排",
        value: "D、政府或企业安排",
      },
      {
        label: "E、自主创业",
        value: "E、自主创业",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（二）经济活动及就业方面",
    title: "13、您认为在就业中最大的障碍是什么？",
    mode: "radio",
    options: [
      {
        label: "A、年龄",
        value: "A、年龄",
      },
      {
        label: "B、文化程度、技术能力",
        value: "B、文化程度、技术能力",
      },
      {
        label: "C、工作经验   ",
        value: "C、工作经验   ",
      },
      {
        label: "D、性别歧视",
        value: "D、性别歧视",
      },
      {
        label: "E、户籍、地域",
        value: "E、户籍、地域",
      },
      {
        label: "F、家庭因素",
        value: "F、家庭因素",
      },
      {
        label: "G、资金",
        value: "G、资金",
      },
      {
        label: "H、其他",
        value: "H、其他",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（二）经济活动及就业方面",
    title: "14、您认为解决当前女性就业难的最有效的办法是？（可多选）",
    mode: "checkbox",
    options: [
      {
        label: "A、完善相应的社会保障机制，普遍建立生育保障",
        value: "A、完善相应的社会保障机制，普遍建立生育保障",
      },
      {
        label: "B、加强性别平等宣传，消除用人单位重男轻女",
        value: "B、加强性别平等宣传，消除用人单位重男轻女",
      },
      {
        label: "C、制定具有可操作性的两性平等就业政策，并大力推广",
        value: "C、制定具有可操作性的两性平等就业政策，并大力推广",
      },
      {
        label: "D、女性应该提高自身素质，积极参与社会实践",
        value: "D、女性应该提高自身素质，积极参与社会实践",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（二）经济活动及就业方面",
    title: "15、您了解就业信息的主要渠道？（可多选）",
    mode: "checkbox",
    options: [
      {
        label: "A、亲友介绍",
        value: "A、亲友介绍",
      },
      {
        label: "B、网上搜寻",
        value: "B、网上搜寻",
      },
      {
        label: "C、招聘会",
        value: "C、招聘会",
      },
      {
        label: "D、职业中介",
        value: "D、职业中介",
      },
      {
        label: "E、村（社区）劳动保障和社会救助站  ",
        value: "E、村（社区）劳动保障和社会救助站  ",
      },
      {
        label: "F、其他",
        value: "F、其他",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（二）经济活动及就业方面",
    title: "16、您想通过哪种途经实现就业再就业？（可多选）",
    mode: "checkbox",
    options: [
      {
        label: "A、企业应聘",
        value: "A、企业应聘",
      },
      {
        label: "B、来料加工（即手工编织等在家就业形式）",
        value: "B、来料加工（即手工编织等在家就业形式）",
      },
      {
        label: "C、农林种植或畜牧养殖",
        value: "C、农林种植或畜牧养殖",
      },
      {
        label: "D、自主创业",
        value: "D、自主创业",
      },
      {
        label: "E、无就业意向   ",
        value: "E、无就业意向   ",
      },
      {
        label: "F、其他",
        value: "F、其他",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（二）经济活动及就业方面",
    title: "17、如果自主创业，您最希望参加哪类培训？",
    mode: "radio",
    options: [
      {
        label: "A、技术技能培训",
        value: "A、技术技能培训",
      },
      {
        label: "B、文化知识培训",
        value: "B、文化知识培训",
      },
      {
        label: "C、创业技能培训",
        value: "C、创业技能培训",
      },
      {
        label: "D、职业资格认证培训 ",
        value: "D、职业资格认证培训 ",
      },
      {
        label: "E、其他",
        value: "E、其他",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（二）经济活动及就业方面",
    title: "18、如果自主创业，您最想得到的帮助是？",
    mode: "radio",
    options: [
      {
        label: "A、资金支持",
        value: "A、资金支持",
      },
      {
        label: "B、技术培训",
        value: "B、技术培训",
      },
      {
        label: "C、信息指导",
        value: "C、信息指导",
      },
      {
        label: "D、政府政策扶持 ",
        value: "D、政府政策扶持 ",
      },
      {
        label: "E、其他",
        value: "E、其他",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（二）经济活动及就业方面",
    title: "19、您希望就业培训以哪种形式开展?",
    mode: "radio",
    options: [
      {
        label: "A、在家自学",
        value: "A、在家自学",
      },
      {
        label: "B、网络教育",
        value: "B、网络教育",
      },
      {
        label: "C、现场教学",
        value: "C、现场教学",
      },
      {
        label: "D、举办教育活动 ",
        value: "D、举办教育活动 ",
      },
      {
        label: "E、妇女之间自发组织互助教育",
        value: "E、妇女之间自发组织互助教育",
      },
      {
        label: "F、其他",
        value: "F、其他",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（二）经济活动及就业方面",
    title: "20、您认为妇女就业市场应加强哪些方面的建设？(可多选)",
    mode: "checkbox",
    options: [
      {
        label: "A、搜集和发布职业需求信息",
        value: "A、搜集和发布职业需求信息",
      },
      {
        label: "B、就近组织招聘会",
        value: "B、就近组织招聘会",
      },
      {
        label: "C、就业政策、制度和法规咨询  ",
        value: "C、就业政策、制度和法规咨询  ",
      },
      {
        label: "D、帮助提高就业技能",
        value: "D、帮助提高就业技能",
      },
      {
        label: "E、帮助解决求职、就业中的其他困难   ",
        value: "E、帮助解决求职、就业中的其他困难   ",
      },
      {
        label: "F、其他",
        value: "F、其他",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（三）决策和管理方面",
    title: "1、如果有机会，您会选择参与企业或政府的决策和管理吗？",
    mode: "radio",
    options: [
      {
        label: "A、一定会",
        value: "A、一定会",
      },
      {
        label: "B、可能会",
        value: "B、可能会",
      },
      {
        label: "C、不确定",
        value: "C、不确定",
      },
      {
        label: "D、一定不会",
        value: "D、一定不会",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（三）决策和管理方面",
    title: "2、您认为女性在参与决策和管理方面存在的主要问题是：",
    mode: "radio",
    options: [
      {
        label: "A、男性在参与决策和管理方面更有优势",
        value: "A、男性在参与决策和管理方面更有优势",
      },
      {
        label: "B、不具备参与决策和管理方面的能力和知识",
        value: "B、不具备参与决策和管理方面的能力和知识",
      },
      {
        label: "C、家庭和事业难以兼顾",
        value: "C、家庭和事业难以兼顾",
      },
      {
        label: "D、其他",
        value: "D、其他",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（三）决策和管理方面",
    title: "3、您认为妇女参与决策管理需要专门培训吗？",
    mode: "radio",
    options: [
      {
        label: "A、非常需要",
        value: "A、非常需要",
      },
      {
        label: "B、需要",
        value: "B、需要",
      },
      {
        label: "C、不需要",
        value: "C、不需要",
      },
      {
        label: "D、无所谓",
        value: "D、无所谓",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（三）决策和管理方面",
    title: "4、您认为提髙女性参与决策管理方面能力的关键因素是：",
    mode: "radio",
    options: [
      {
        label: "A、参与决策管意识",
        value: "A、参与决策管意识",
      },
      {
        label: "B、领导能力",
        value: "B、领导能力",
      },
      {
        label: "C、组织和制度性保障",
        value: "C、组织和制度性保障",
      },
      {
        label: "D、其他",
        value: "D、其他",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（三）决策和管理方面",
    title: "5、您认为影响您积极参与决策管理的主要因素是：",
    mode: "radio",
    options: [
      {
        label: "A、社会的女性意识和地位的提升",
        value: "A、社会的女性意识和地位的提升",
      },
      {
        label: "B、体现自身的社会价值",
        value: "B、体现自身的社会价值",
      },
      {
        label: "C、工作需要",
        value: "C、工作需要",
      },
      {
        label: "D、其他",
        value: "D、其他",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（三）决策和管理方面",
    title: "6、您在参与决策管理过程中，大众如何看待女性代表：",
    mode: "radio",
    options: [
      {
        label: "A、信任并支持",
        value: "A、信任并支持",
      },
      {
        label: "B、不够信任但支持",
        value: "B、不够信任但支持",
      },
      {
        label: "C、不够信任、不支持",
        value: "C、不够信任、不支持",
      },
      {
        label: "D、不信任",
        value: "D、不信任",
      },
      {
        label: "E、其他",
        value: "E、其他",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（三）决策和管理方面",
    title: "7、促进妇女参与决策管理应从哪个方面入手？",
    mode: "radio",
    options: [
      {
        label: "A、提高参与决策管意识",
        value: "A、提高参与决策管意识",
      },
      {
        label: "B、增加管理能力培训",
        value: "B、增加管理能力培训",
      },
      {
        label: "C、提供组织和制度性保障",
        value: "C、提供组织和制度性保障",
      },
      {
        label: "D、其他",
        value: "D、其他",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（四）教育方面",
    title: "1、您的受教育程度：",
    mode: "radio",
    options: [
      {
        label: "A、小学",
        value: "A、小学",
      },
      {
        label: "B、初中",
        value: "B、初中",
      },
      {
        label: "C、高中",
        value: "C、高中",
      },
      {
        label: "D、专科",
        value: "D、专科",
      },
      {
        label: "E、本科",
        value: "E、本科",
      },
      {
        label: "F、研究生以上",
        value: "F、研究生以上",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（四）教育方面",
    title: "2、您认为自己的学历与知识结构是否适应当前社会发展需要？",
    mode: "radio",
    options: [
      {
        label: "A、适应",
        value: "A、适应",
      },
      {
        label: "B、基本适应",
        value: "B、基本适应",
      },
      {
        label: "C、不适应",
        value: "C、不适应",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（四）教育方面",
    title: "3、您认为影响妇女受教育的主要因素是：",
    mode: "radio",
    options: [
      {
        label: "A、重男轻女的传统观念",
        value: "A、重男轻女的传统观念",
      },
      {
        label: "B、家境贫困无法继续学业",
        value: "B、家境贫困无法继续学业",
      },
      {
        label: "C、身体、智力等因素",
        value: "C、身体、智力等因素",
      },
      {
        label: "D、其他",
        value: "D、其他",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（四）教育方面",
    title: "4、您若愿意继续学习，最希望是：",
    mode: "radio",
    options: [
      {
        label: "A、提升学历",
        value: "A、提升学历",
      },
      {
        label: "B、参加短期培训",
        value: "B、参加短期培训",
      },
      {
        label: "C、没考虑过",
        value: "C、没考虑过",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（四）教育方面",
    title: "5、您所在单位、社区举办关于妇女教育培训的活动如何？",
    mode: "radio",
    options: [
      {
        label: "A、经常",
        value: "A、经常",
      },
      {
        label: "B、偶尔",
        value: "B、偶尔",
      },
      {
        label: "C、从来没有",
        value: "C、从来没有",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（四）教育方面",
    title: "6、若参加短期培训，您最想培训的内容是（最多可选三项）：",
    mode: "radio",
    options: [
      {
        label: "A、农业技能",
        value: "A、农业技能",
      },
      {
        label: "B、服务业",
        value: "B、服务业",
      },
      {
        label: "D、教育培训(如计算机、外语类以及学历方面等)",
        value: "D、教育培训(如计算机、外语类以及学历方面等)",
      },
      {
        label: "C、简单技术类E手工业",
        value: "C、简单技术类E手工业",
      },
      {
        label: "F、创业思维类(创业政策、创业的职业规划指导等)",
        value: "F、创业思维类(创业政策、创业的职业规划指导等)",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（四）教育方面",
    title: "7、您希望的学习方式是：",
    mode: "radio",
    options: [
      {
        label: "A、提升学历的在校教育",
        value: "A、提升学历的在校教育",
      },
      {
        label: "B、在职教育",
        value: "B、在职教育",
      },
      {
        label: "C、妇联组织的短期培训",
        value: "C、妇联组织的短期培训",
      },
      {
        label: "D、当地政府组织的短期培训",
        value: "D、当地政府组织的短期培训",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（五）健康方面",
    title: "1、您多久做一次健康检查：",
    mode: "radio",
    options: [
      {
        label: "A、半年一次",
        value: "A、半年一次",
      },
      {
        label: "B、一年一次",
        value: "B、一年一次",
      },
      {
        label: "C、3－5年一次",
        value: "C、3－5年一次",
      },
      {
        label: "D、不舒服时检查",
        value: "D、不舒服时检查",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（五）健康方面",
    title: "2、您通常会采取哪些方式维持身体健康（多选题）？",
    mode: "checkbox",
    options: [
      {
        label: "A、体育锻炼",
        value: "A、体育锻炼",
      },
      {
        label: "B、饮食调节",
        value: "B、饮食调节",
      },
      {
        label: "C、药物辅助或保健品",
        value: "C、药物辅助或保健品",
      },
      {
        label: "D、良好的生活习惯",
        value: "D、良好的生活习惯",
      },
      {
        label: "E、其他",
        value: "E、其他",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（五）健康方面",
    title: "3、您是否定期对妇女常见病进行检査？",
    mode: "radio",
    options: [
      {
        label: "A、定期检查",
        value: "A、定期检查",
      },
      {
        label: "B、很少检查",
        value: "B、很少检查",
      },
      {
        label: "C、患病时检查",
        value: "C、患病时检查",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（五）健康方面",
    title: "4、您认为婚前医学检查是否有必要？",
    mode: "radio",
    options: [
      {
        label: "A、非常有必要",
        value: "A、非常有必要",
      },
      {
        label: "B、有必要",
        value: "B、有必要",
      },
      {
        label: "C、没有必要",
        value: "C、没有必要",
      },
      {
        label: "D、无所谓",
        value: "D、无所谓",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（五）健康方面",
    title: "5、您所在的社区、村为保障妇女的健康权益提供了哪些服务（多选题）？",
    mode: "checkbox",
    options: [
      {
        label: "A、建立社区、村卫生服务站为妇女提供便捷的医疗卫生服务",
        value: "A、建立社区、村卫生服务站为妇女提供便捷的医疗卫生服务",
      },
      {
        label: "B、经常举办妇女卫生保健知识讲座和教育活动",
        value: "B、经常举办妇女卫生保健知识讲座和教育活动",
      },
      {
        label: "C、加强宣传，提高妇女预防艾滋病的意识和能力",
        value: "C、加强宣传，提高妇女预防艾滋病的意识和能力",
      },
      {
        label: "D、组织妇女进行健康体检，指导不同生理期的妇女进行卫生保健",
        value: "D、组织妇女进行健康体检，指导不同生理期的妇女进行卫生保健",
      },
      {
        label: "E、其他",
        value: "E、其他",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（五）健康方面",
    title: "6、您最希望获得社区提供的妇女健康权益保护服务是（多选题）？",
    mode: "checkbox",
    options: [
      {
        label: "A、平时加强健康保健教育和宣传",
        value: "A、平时加强健康保健教育和宣传",
      },
      {
        label: "B、组织妇女参加身体检査",
        value: "B、组织妇女参加身体检査",
      },
      {
        label: "C、出现健康小问题时社区能及时提供治疗和指导服务",
        value: "C、出现健康小问题时社区能及时提供治疗和指导服务",
      },
      {
        label: "D、出现健康大问题时社区能在经济上和精神上提供帮助",
        value: "D、出现健康大问题时社区能在经济上和精神上提供帮助",
      },
      {
        label: "E、其他",
        value: "E、其他",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（六）劳动和社会保障方面",
    title: "l、是否与用人单位签订劳动合同？",
    mode: "radio",
    options: [
      {
        label: "A、是  ",
        value: "A、是  ",
      },
      {
        label: "B、否",
        value: "B、否",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（六）劳动和社会保障方面",
    title: "2、用人单位是否为您交纳保险？",
    mode: "radio",
    options: [
      {
        label: "A、是  ",
        value: "A、是  ",
      },
      {
        label: "B、否",
        value: "B、否",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（六）劳动和社会保障方面",
    title: "3、是否与男职工同工同酬？",
    mode: "radio",
    options: [
      {
        label: "A、是  ",
        value: "A、是  ",
      },
      {
        label: "B、否",
        value: "B、否",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（六）劳动和社会保障方面",
    title: "4、在经期、孕期、产期、哺乳期是否受到特殊保障？",
    mode: "radio",
    options: [
      {
        label: "A、是  ",
        value: "A、是  ",
      },
      {
        label: "B、否",
        value: "B、否",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（六）劳动和社会保障方面",
    title: "5、在找工作与就业中是否遭受性别歧视？",
    mode: "radio",
    options: [
      {
        label: "A、是  ",
        value: "A、是  ",
      },
      {
        label: "B、否",
        value: "B、否",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（六）劳动和社会保障方面",
    title: "6、您是否了解《妇女权益保障法》？",
    mode: "radio",
    options: [
      {
        label: "A、了解",
        value: "A、了解",
      },
      {
        label: "B、听说过但不太清楚 ",
        value: "B、听说过但不太清楚 ",
      },
      {
        label: "C、不了解",
        value: "C、不了解",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（六）劳动和社会保障方面",
    title: "7、您觉得我市出台《南安市妇女权益保障条例》是否有必要？",
    mode: "radio",
    options: [
      {
        label: "A、有必要",
        value: "A、有必要",
      },
      {
        label: "B、无所谓",
        value: "B、无所谓",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（六）劳动和社会保障方面",
    title: "8、当您的权益受到侵害时，您选择哪一种方式进行维权？",
    mode: "radio",
    options: [
      {
        label: "A、通过相关部门及法律手段主动维权",
        value: "A、通过相关部门及法律手段主动维权",
      },
      {
        label: "B、想维权但不知道怎么办",
        value: "B、想维权但不知道怎么办",
      },
      {
        label: "C、怕麻烦，不了了之",
        value: "C、怕麻烦，不了了之",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（六）劳动和社会保障方面",
    title: "9、您在婚姻家庭中遭受过家庭暴力吗？",
    mode: "radio",
    options: [
      {
        label: "A、经常遭受",
        value: "A、经常遭受",
      },
      {
        label: "B、偶尔遭受",
        value: "B、偶尔遭受",
      },
      {
        label: "C、从未遭受",
        value: "C、从未遭受",
      },
      {
        label: "D、其他",
        value: "D、其他",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（六）劳动和社会保障方面",
    title: "10、您认为预防和制止家庭暴力最好的办法是（多选题）？",
    mode: "checkbox",
    options: [
      {
        label: "A、专门立法进行预防和惩治",
        value: "A、专门立法进行预防和惩治",
      },
      {
        label: "B、强化家暴110报警",
        value: "B、强化家暴110报警",
      },
      {
        label: "C、社区、妇联帮助调解沟通",
        value: "C、社区、妇联帮助调解沟通",
      },
      {
        label: "D、以暴制暴",
        value: "D、以暴制暴",
      },
      {
        label: "E、其他",
        value: "E、其他",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（六）劳动和社会保障方面",
    title: "11、您所在的社区、村是否经常宣传涉及妇女的相关法律、法规？",
    mode: "radio",
    options: [
      {
        label: "A、经常宣传",
        value: "A、经常宣传",
      },
      {
        label: "B、偶尔宣传",
        value: "B、偶尔宣传",
      },
      {
        label: "C、从不宣传",
        value: "C、从不宣传",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（六）劳动和社会保障方面",
    title: "12、在权益受到侵害时，您会选择什么途径解决？",
    mode: "radio",
    options: [
      {
        label: "A、找妇联组织  ",
        value: "A、找妇联组织  ",
      },
      {
        label: "B、找亲戚朋友帮助",
        value: "B、找亲戚朋友帮助",
      },
      {
        label: "C、找政府相关部门",
        value: "C、找政府相关部门",
      },
      {
        label: "D、寻找法律帮助 ",
        value: "D、寻找法律帮助 ",
      },
      {
        label: "E、忍受",
        value: "E、忍受",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（七）您对所在地区妇女保障工作的了解程度",
    title: "1、您知道所在社区（村、居）的妇女组织吗？",
    mode: "radio",
    options: [
      {
        label: "A、知道",
        value: "A、知道",
      },
      {
        label: "B、听说过，不太了解",
        value: "B、听说过，不太了解",
      },
      {
        label: "C、不知道",
        value: "C、不知道",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（七）您对所在地区妇女保障工作的了解程度",
    title: "2、您所在的社区（村、居）对妇女儿童工作重视吗？",
    mode: "radio",
    options: [
      {
        label: "A、重视",
        value: "A、重视",
      },
      {
        label: "B、比较重视",
        value: "B、比较重视",
      },
      {
        label: "C、不重视",
        value: "C、不重视",
      },
      {
        label: "D、不知道",
        value: "D、不知道",
      },
    ],
  },
  {
    block: "一、妇女发展",
    category: "（七）您对所在地区妇女保障工作的了解程度",
    title: "3、您对所在社区（村、居）妇女协会等妇女组织的工作持何态度？",
    mode: "radio",
    options: [
      {
        label: "A、非常满意",
        value: "A、非常满意",
      },
      {
        label: "B、满意",
        value: "B、满意",
      },
      {
        label: "C、一般",
        value: "C、一般",
      },
      {
        label: "D、不满意",
        value: "D、不满意",
      },
      {
        label: "E、不清楚",
        value: "E、不清楚",
      },
    ]
  },
  {
    block: "一、妇女发展",
    category: "（八）妇女儿童与环境",
    title: "1、现实中，您所在城市在适宜儿童居住方面的明显不足是?(选出您认为最重要的选项)【最多选择3项】",
    mode: "checkbox",
    max:3,
    options: [
      {
        label: "A.儿童专有场馆不足，在布局、规模、功能上不能满足儿童成长需求",
        value: "A.儿童专有场馆不足，在布局、规模、功能上不能满足儿童成长需求",
      },
      {
        label: "B.儿童户外公共活动空间不足，数量少、离家远、设施单调陈旧不安全",
        value: "B.儿童户外公共活动空间不足，数量少、离家远、设施单调陈旧不安全",
      },
      {
        label: "C.城市交通管控没有考虑儿童独自出行安全需要，没有儿童上学必经路段的慢行限速或车辆禁行设置,没有设置儿童步行道",
        value: "C.城市交通管控没有考虑儿童独自出行安全需要，没有儿童上学必经路段的慢行限速或车辆禁行设置,没有设置儿童步行道",
      },
      {
        label: "D.商场、车站、机场、码头、医院、旅游景点、科教场馆等各类公共场所母婴室、儿童卫生间(儿童马桶)、第三卫生间等设置不足",
        value: "D.商场、车站、机场、码头、医院、旅游景点、科教场馆等各类公共场所母婴室、儿童卫生间(儿童马桶)、第三卫生间等设置不足",
      },
      {
        label: "E.城市环卫、垃圾处理、饮用水水质、空气质量不够好，河湖水质有污染,城市绿化覆盖率低，儿童生长的自然环境不够干净整洁和绿色环保",
        value: "E.城市环卫、垃圾处理、饮用水水质、空气质量不够好，河湖水质有污染,城市绿化覆盖率低，儿童生长的自然环境不够干净整洁和绿色环保",
      },
    ]
  },
  {
    block: "一、妇女发展",
    category: "（八）妇女儿童与环境",
    title: "2、您认为什么样的社区适合妇女儿童生活?(选出您认为最重要的选项)【最多选择3项】",
    mode: "checkbox",
    max:3,
    options: [
      {
        label: "A.绿化好，儿童能够体验找虫子、听鸟叫、闻花香、捡树叶等亲近自然的乐趣",
        value: "A.绿化好，儿童能够体验找虫子、听鸟叫、闻花香、捡树叶等亲近自然的乐趣",
      },
      {
        label: "B.空间大，有适合儿童玩耍、游戏、捉迷藏的户外活动空间、游戏角等",
        value: "B.空间大，有适合儿童玩耍、游戏、捉迷藏的户外活动空间、游戏角等",
      },
      {
        label: "C.交通好，社区交通考虑儿童活动需要进行管控，设立童趣化的地面交通引导标识体系，儿童在社区内可以安全自由步行、骑车、玩耍等",
        value: "C.交通好，社区交通考虑儿童活动需要进行管控，设立童趣化的地面交通引导标识体系，儿童在社区内可以安全自由步行、骑车、玩耍等",
      },
      {
        label: "D.服务实，有社区儿童之家、儿童图书室、婴幼儿托育点、幼儿园、儿童卫生保健中心等，提供惠民公共服务，满足儿童生活和成长需要",
        value: "D.服务实，有社区儿童之家、儿童图书室、婴幼儿托育点、幼儿园、儿童卫生保健中心等，提供惠民公共服务，满足儿童生活和成长需要",
      },
      {
        label: "E.安全好，社区在恰当区域设立安全警示牌、安全护栏，儿童室内外公共活动场所采用安全环保材料，地面平整防滑，设施采取圆角或软包处理，防止儿童受到伤害",
        value: "E.安全好，社区在恰当区域设立安全警示牌、安全护栏，儿童室内外公共活动场所采用安全环保材料，地面平整防滑，设施采取圆角或软包处理，防止儿童受到伤害",
      },
      {
        label: "F.活动多，居委会、驻区单位、志愿者、家长联合联动好，社会组织入驻社区开展针对儿童和家庭的各类活动",
        value: "F.活动多，居委会、驻区单位、志愿者、家长联合联动好，社会组织入驻社区开展针对儿童和家庭的各类活动",
      },
      {
        label: "G.其他",
        value: "G.其他",
      },
    ]
  },
  {
    block: "一、妇女发展",
    category: "（八）妇女儿童与环境",
    title: "3、环境污染不利于妇女儿童健康成长,对于妇女儿童的生长环境您主要的建议是?(选出您认为最重要的选项)【最多选择3项】",
    mode: "checkbox",
    max:3,
    options: [
      {
        label: "A.加强企业的污染查治管控和施工单位的扬尘监管，倡导绿色出行,减少雾霾现象和降低温室效应，确保空气清新",
        value: "A.加强企业的污染查治管控和施工单位的扬尘监管，倡导绿色出行,减少雾霾现象和降低温室效应，确保空气清新",
      },
      {
        label: "B.加强河湖塘库沟渠水源保护和水质净化处理，确保生活用水和水产品质量安全",
        value: "B.加强河湖塘库沟渠水源保护和水质净化处理，确保生活用水和水产品质量安全",
      },
      {
        label: "C.见缝插针多种绿植，依据地形地貌多建休闲公园、广场，改善城市的生态环境",
        value: "C.见缝插针多种绿植，依据地形地貌多建休闲公园、广场，改善城市的生态环境",
      },
      {
        label: "D.践行社会主义核心价值观，加强生态文明宣传教育，营造积极向上、友爱和谐的社会文化氛围和爱护生态环境的良好风气",
        value: "D.践行社会主义核心价值观，加强生态文明宣传教育，营造积极向上、友爱和谐的社会文化氛围和爱护生态环境的良好风气",
      },
      {
        label: "E.其他",
        value: "E.其他",
      },
    ]
  },
  {
    block: "一、妇女发展",
    category: "（八）妇女儿童与环境",
    title: "4、您认为目前儿童文化产品和儿童文化参与方面还存在哪些不足?(选出您认为最重要的选项)【最多选择3项】",
    mode: "checkbox",
    max:3,
    options: [
      {
        label: "A.一些儿童文化产品(如图书、影视、歌曲、舞蹈、动漫、游戏等)缺乏创新性，优质产品较少，尤其缺乏优良网络儿童文化产品",
        value: "A.一些儿童文化产品(如图书、影视、歌曲、舞蹈、动漫、游戏等)缺乏创新性，优质产品较少，尤其缺乏优良网络儿童文化产品",
      },
      {
        label: "B.儿童文化产品缺乏对优秀传统文化和民族艺术的传播",
        value: "B.儿童文化产品缺乏对优秀传统文化和民族艺术的传播",
      },
      {
        label: "C.儿童没有参与儿童文化产品设计、创作、审议的途径",
        value: "C.儿童没有参与儿童文化产品设计、创作、审议的途径",
      },
      {
        label: "D.“三俗”儿童文化产品在市场上依旧可见",
        value: "D.“三俗”儿童文化产品在市场上依旧可见",
      },
      {
        label: "E.消费者筛选能力弱，盲目跟风消费儿童文化产品",
        value: "E.消费者筛选能力弱，盲目跟风消费儿童文化产品",
      },
      {
        label: "F.儿童没有充足的闲暇时间赏析、学习文化产品",
        value: "F.儿童没有充足的闲暇时间赏析、学习文化产品",
      },
      {
        label: "G.其他",
        value: "G.其他",
      },
    ]
  },
  {
    block: "一、妇女发展",
    category: "（八）妇女儿童与环境",
    title: "5、您对福建省妇女儿童友好环境的建设与发展还有什么期待或建议？",
    mode: "input"
  },
  {
    block: "二、儿童保障",
    category: "儿童与健康",
    title: "农村和山区儿童享有均等化的卫生保健服务",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与健康",
    title: "儿童医疗保健人才队伍建设和儿科学科建设加强，儿童卫生服务能力提高。",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与健康",
    title: "儿童保健服务内容扩大，保健管理和服务体系化加强",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与健康",
    title: "基层冷链系统建设和维护良好，规范预防接种行为，免疫服务质量提高",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与健康",
    title:
      "具有完善的儿童伤害监测系统和报告制度，具有儿童意外伤害事件和公共突发事件的应急预案",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与健康",
    title:
      "具有儿童心理健康公共服务网络，对行为异常儿童及时采取干预和康复措施。",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与健康",
    title: "具有儿童生殖健康公共服务，满足儿童的咨询与治疗需求。",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与健康",
    title:
      "具有完善婴幼儿食品和用品的检测标准和质量认证体系，婴幼儿用品、玩具生产销售和游乐设施运营的有监管",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与健康",
    title:
      "健全产前诊断网络，逐步扩大对城市低保孕妇和农村孕妇实行免费产前筛查、诊断范围。",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与健康",
    title:
      "对托幼园所和学校卫生保健指导，全面实施国家学生体质健康标准和学生体质健康监测制度，建立学生健康档案。",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与健康",
    title:
      "继续推行中小学生营养改善计划，提高农村寄宿制学校家庭经济困难学生的伙食补贴标准，扩大补贴范围。",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与教育",
    title: "义务教育学校标准化建设水平提高，学生的综合素质和能力全面提升。",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与教育",
    title:
      "基本教育公共服务均等化，坚持教育的公益性和普惠性，增加对农村的教育投入",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与教育",
    title: "加强教师职业理想和职业道德教育，提高教师师德修养水平。",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与教育",
    title:
      "建设民主、文明、和谐、平等、安全的友好型学校。建立尊师爱生的师生关系，不歧视品行有缺点、学习有困难的学生。",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与教育",
    title:
      "建设教育管理公共服务平台，建设各级各类学校数字化教学资源库，提升农村中小学现代远程教育建设和应用水平。",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与教育",
    title:
      "保证经济社会发展规划优先安排教育发展，财政资金优先保障教育的投入，公共资源优先满足教育开发需要。",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与教育",
    title:
      "积极开展0—3岁儿童科学育儿指导。以幼儿园和社区为依托，为0—3岁儿童及其家庭提供早期保育和教育指导。",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与教育",
    title:
      "加强学前教育监督和管理。严格准入制度和收费标准，执行教师持证上岗制度，规范办园行为，提高保教质量",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与教育",
    title: "确保受人口流动影响的儿童平等接受义务教育",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与教育",
    title:
      "落实孤儿、残疾儿童、贫困儿童就学的资助政策。健全残疾儿童随班就读的支持保障体系",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与教育",
    title:
      "提高高中阶段教育财政投入水平，推动普通高中多样化发展、特色化办学，满足不同儿童的发展需求。",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与福利",
    title: "保障儿童享有基本医疗卫生服务，为贫困和大病儿童提供医疗救助。",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与福利",
    title: "扩大儿童福利范围，基本满足流动和留守儿童的基本公共服务需求。",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与福利",
    title:
      "满足孤儿教育、医疗和就业等基本需求，提高孤儿的收养率，减少流浪儿童。",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与福利",
    title:
      "建立0—6岁残疾儿童免费抢救性康复救助制度，提高0—6岁残疾儿童抢救性康复覆盖率。",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与福利",
    title:
      "儿童医疗救助水平提高，开展儿童白血病、先天性心脏病等儿童重大疾病医疗保障试点。",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与福利",
    title:
      "增加财政对儿童福利的投入，加大城乡统筹力度，促进城乡儿童基本公共服务的均等化。",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与福利",
    title:
      "保障儿童基本医疗。扩大儿童医疗保险的支付范围，提高支付比例和最高支付限额，减轻患病儿童家庭医疗费用负担。",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与福利",
    title: "完善残疾儿童康复救助制度和服务体系。",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与福利",
    title:
      "加强对留守儿童心理、情感和行为的指导，提高留守儿童家长的监护意识和责任。",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与福利",
    title:
      "完善流浪儿童救助保护网络体系，健全流浪儿童生活、教育、管理、返乡和安置保障制度",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与社会环境",
    title:
      "建立县、乡两级儿童教育、文化、体育、娱乐等课外活动设施和场所，为儿童提供公益性服务。",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与社会环境",
    title:
      "保障儿童参与家庭生活、学校和社会事务的权利，保障儿童享有闲暇和娱乐的权利。",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与社会环境",
    title: "创造有益于儿童身心健康的文化环境，规范与儿童相关的广告和商业性活动",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与社会环境",
    title:
      "为儿童健康上网创造条件。家长和教师加强对儿童上网的引导，防止儿童沉迷网络。",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与社会环境",
    title: "建立各级各类学校的家长学校或家庭教育指导服务点，提高家庭教育水平。",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与社会环境",
    title:
      "保障儿童的参与和表达权利。将儿童参与纳入儿童事务和儿童服务的决策过程",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与社会环境",
    title:
      "鼓励儿童参与力所能及的社会事务和社会公益活动，参与社区建设的讨论决策，提高儿童参与和表达的能力。",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与社会环境",
    title: "鼓励儿童积极参与环保活动，引导儿童践行低碳生活和绿色消费。",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与社会环境",
    title: "广泛开展各类图书阅读活动，鼓励和引导儿童主动读书。",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与社会环境",
    title:
      "强化城乡社区儿童的教育服务管理功能。促进儿童福利、卫生、科技、法律等服务进社区。",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与社会环境",
    title: "将儿童课外活动设施和场所建设纳入地方经济和社会发展总体规划",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与法律保护",
    title:
      "具有严重不良行为儿童的矫治制度。建立家庭、学校、社会共同参与的运作机制，对有不良行为的儿童进行介入、干预和行为矫治。",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与法律保护",
    title: "开展维护儿童合法权益相关法律知识的社会宣传和咨询服务",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与法律保护",
    title: "发挥民间组织、社会团体和舆论在监督执法、保障儿童权益中的积极作用。",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与法律保护",
    title:
      "消除对女童的歧视，落实奖励生育女孩家庭的优惠政策，提高生育女孩家庭的经济和社会地位。",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与法律保护",
    title: "建立和完善儿童监护监督制度。",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与法律保护",
    title: "完善儿童法律援助和司法救助机制。",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与法律保护",
    title:
      "保障儿童依法获得及时有效的法律援助和司法救助，预防未成年人违法犯罪。",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与法律保护",
    title:
      "大力开展维护儿童合法权益相关法律知识的社会宣传和咨询服务，加强法制宣传教育",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与法律保护",
    title:
      "加强对执法和司法人员儿童权益保护的知识和技能培训，增强儿童权益保护观念，提高执法水平和执法质量。",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与法律保护",
    title:
      "加强社会治安综合治理，严厉打击强奸、虐待、遗弃等侵害儿童人身权利和胁迫、诱骗、利用儿童贩运毒品、卖淫等违法犯罪行为。",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
  {
    block: "二、儿童保障",
    category: "儿童与法律保护",
    title:
      "建立和完善适合未成年人的专门司法机构，推进未成年人案件办理的专业化。",
    options: [
      {
        label: "非常不同意",
        value: "1",
      },
      {
        label: "不同意",
        value: "2",
      },
      {
        label: "无所谓",
        value: "3",
      },
      {
        label: "同意",
        value: "4",
      },
      {
        label: "非常同意",
        value: "5",
      },
    ],
    mode: "radio",
  },
]);
