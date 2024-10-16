"use client"
import React, {useEffect} from 'react'
import axiosInstance from '../lib/utils/axiosInstance'

const onboarding= () => {

  useEffect(() => {
    axiosInstance.get('/onboarding')
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div>onboarding</div>
  )
}

export default onboarding
