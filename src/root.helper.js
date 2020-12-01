export const links = [
    {
      index: 'top1',
      name: "home",
      href: "/",
      type: "toplevel",
      icon:'AppstoreOutlined',
    },
    {
      index: 'top2',
      name: "opp",
      href: "/oppReact",
      type: "toplevel",
      icon: "PieChartOutlined"
    },
    {
      index: 'top3',
      name: "testSingle",
      href: "/testSingle",
      type: "toplevel",
      icon: "MenuFoldOutlined"
    },
    {
      index: 'top4',
      name: "tmp",
      href: "/tmp",
      type: "sublevel",
      icon: "MailOutlined",
      subItem:[
        {
          secIndex:"4_1",
          secName: "test1"
        },
        {
          secIndex:"4_2",
          secName: "test2"
        },
        {
          secIndex:"4_3",
          secName: "test3"
        },
      ]

    },
  ];