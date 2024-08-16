'use client';
import { Button } from "@repo/ui/button";
import { useState } from "react";
import axios from "axios";
import { signUpType } from '@repo/common/config'


export default function Home() {

  const [data, setData] = useState<signUpType>({
    name: '',
    email: '',
    password: ''
  })

  return (
    <>
      <Button appName="next" className="bg-red-500">Hello Next app</Button>
      <div>
        <input style={{ border: '1px solid black' }} type="text" placeholder="name" onChange={(e) => setData({ ...data, name: e.target.value })} value={data.name} />
        <br />
        <input style={{ border: '1px solid black' }} type="email" placeholder="email" onChange={(e) => setData({ ...data, email: e.target.value })} value={data.email} />
        <br />
        <input style={{ border: '1px solid black' }} type="password" placeholder="password" onChange={(e) => setData({ ...data, password: e.target.value })} value={data.password} />
        <br />
        <button onClick={() => {
          axios.post('http://localhost:5000/zod-check', data).then(res => {
            if (res?.data?.msg == "success") {
              alert("success")
              setData({ name: '', email: '', password: '' })
            } else {
              alert("invalid data format")
            }
          }).catch(err => console.log(err))
        }}>Sign Up</button>
      </div>
    </>
  );
}
