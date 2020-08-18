import React from 'react'
import { Button } from '../component/button'
import { IcoCross } from '../component/icon'

export default () => {
  return (
    <>
      <div>
        <Button color='primary'>Learn React primary</Button>
        <Button color='secondary'>Learn React secondary</Button>
        <Button color='warning'>Learn React warning</Button>
        <Button color='danger'>Learn React danger</Button>
        <Button color='success'>Learn React success</Button>
      </div>
      <div>
        <Button color='primary' variant='outline'>
          Learn React primary
        </Button>
        <Button color='secondary' variant='outline'>
          Learn React secondary
        </Button>
        <Button color='warning' variant='outline'>
          Learn React warning
        </Button>
        <Button color='danger' variant='outline'>
          Learn React danger
        </Button>
        <Button color='success' variant='outline'>
          Learn React success
        </Button>
      </div>
      <div>
        <Button color='primary' variant='outlined'>
          Learn React primary
        </Button>
        <Button color='secondary' variant='outlined'>
          Learn React secondary
        </Button>
        <Button color='warning' variant='outlined'>
          Learn React warning
        </Button>
        <Button color='danger' variant='outlined'>
          Learn React danger
        </Button>
        <Button color='success' variant='outlined'>
          Learn React success
        </Button>
      </div>
      <div>
        <Button color='primary' type='link'>
          Learn React primary
        </Button>
        <Button color='secondary' type='link'>
          Learn React secondary
        </Button>
        <Button color='warning' type='link'>
          Learn React warning
        </Button>
        <Button color='danger' type='link'>
          Learn React danger
        </Button>
        <Button color='success' type='link'>
          Learn React success
        </Button>
      </div>
      <div>
        <Button color='primary' type='link' variant='outlined'>
          Learn React primary
        </Button>
        <Button color='secondary' type='link' variant='outlined'>
          Learn React secondary
        </Button>
        <Button color='warning' type='link' variant='outlined'>
          Learn React warning
        </Button>
        <Button color='danger' type='link' variant='outlined'>
          Learn React danger
        </Button>
        <Button color='success' type='link' variant='outlined'>
          Learn React success
        </Button>
      </div>
      <div>
        <Button color='primary' type='btn-icon'>
          <IcoCross />
        </Button>
        <Button color='secondary' type='btn-icon'>
          <IcoCross />
        </Button>
        <Button color='warning' type='btn-icon'>
          <IcoCross />
        </Button>
        <Button color='danger' type='btn-icon'>
          <IcoCross />
        </Button>
        <Button color='success' type='btn-icon'>
          <IcoCross />
        </Button>

        <Button color='primary' type='btn-icon' variant='outlined'>
          <IcoCross />
        </Button>
        <Button color='secondary' type='btn-icon' variant='outlined'>
          <IcoCross />
        </Button>
        <Button color='warning' type='btn-icon' variant='outlined'>
          <IcoCross />
        </Button>
        <Button color='danger' type='btn-icon' variant='outlined'>
          <IcoCross />
        </Button>
        <Button color='success' type='btn-icon' variant='outlined'>
          <IcoCross />
        </Button>

        <Button color='primary' type='btn-icon' variant='outline'>
          <IcoCross />
        </Button>
        <Button color='secondary' type='btn-icon' variant='outline'>
          <IcoCross />
        </Button>
        <Button color='warning' type='btn-icon' variant='outline'>
          <IcoCross />
        </Button>
        <Button color='danger' type='btn-icon' variant='outline'>
          <IcoCross />
        </Button>
        <Button color='success' type='btn-icon' variant='outline'>
          <IcoCross />
        </Button>
      </div>
    </>
  )
}
