// import Mock, { Random } from 'mockjs'
import type { MockMethod } from 'vite-plugin-mock'
import { resultOk } from '../_util'

const haveReadIds: number[] = []

function getNotifyList() {
  return [
    {
      id: 1,
      type: 'message',
      title: '郑曦月',
      subTitle: '的私信',
      avatar:
        '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/8361eeb82904210b4f55fab888fe8416.png~tplv-uwbnlip3yd-webp.webp',
      content: '审批请求已发送，请查收',
      time: '今天 12:30:01',
    },
    {
      id: 2,
      type: 'message',
      title: '宁波',
      subTitle: '的回复',
      avatar:
        '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
      content: '此处 bug 已经修复',
      time: '今天 12:30:01',
    },
    {
      id: 3,
      type: 'message',
      title: '宁波',
      subTitle: '的回复',
      avatar:
        '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
      content: '此处 bug 已经修复',
      time: '今天 12:20:01',
    },
    {
      id: 4,
      type: 'notice',
      title: '续费通知',
      subTitle: '',
      avatar: '',
      content: '您的产品使用期限即将截止，如需继续使用产品请前往购…',
      time: '今天 12:20:01',
      messageType: 3,
    },
    {
      id: 5,
      type: 'notice',
      title: '规则开通成功',
      subTitle: '',
      avatar: '',
      content: '内容屏蔽规则于 2021-12-01 开通成功并生效',
      time: '今天 12:20:01',
      messageType: 1,
    },
    {
      id: 6,
      type: 'todo',
      title: '质检队列变更',
      subTitle: '',
      avatar: '',
      content: '内容质检队列于 2021-12-01 19:50:23 进行变更，请重新…',
      time: '今天 12:20:01',
      messageType: 0,
    },
  ].map((item) => ({
    ...item,
    status: !haveReadIds.includes(item.id) ? 0 : 1,
  }))
}

export default [
  {
    url: '/api/notify/list',
    timeout: 200,
    method: 'get',
    response: () => {
      return resultOk(getNotifyList())
    },
  },
  {
    url: '/api/notify/read',
    timeout: 500,
    method: 'post',
    response: ({
      // @ts-expect-error https://github.com/vbenjs/vite-plugin-mock/issues/54
      body,
    }) => {
      const { ids } = body
      haveReadIds.push(...(ids || []))
      return resultOk(getNotifyList())
    },
  },
] as MockMethod[]
