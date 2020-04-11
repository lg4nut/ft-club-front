import request from '@/utils/request'

export function getFixtures(params) {
  return request({
     url: 'http://39.108.130.210/fixture/qs',
    //url:'http://localhost/fixture/qs',
    method: 'get',
    params
  })

}

