import React from 'react'
import {object,string,ref} from 'yup'

const validations = object({
    email: string().email('Geçerli bir email adresi giriniz').required('Zorunlu alan'),
    password: string().min(5,'Parola minimum 5 karakter olmalıdır').required('Zorunlu alan'),
    passwordConfirm: string().oneOf([ref('password')],'Parolalar uyuşmuyor').required('Zorunlu alan')
})

export default validations