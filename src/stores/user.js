import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as fbSignOut
} from 'firebase/auth'

import { useRouter } from 'vue-router'

import { doc, collection, setDoc } from 'firebase/firestore'

import { useCurrentUser, useFirestore, useDocument, useCollection } from 'vuefire'

const auth = getAuth()

const db = useFirestore()

const router = useRouter()

export const useUserStore = defineStore('user', () => {
  const authUser = useCurrentUser() // ref

  const email = computed(() => authUser.value?.email)
  const uid = computed(() => authUser.value?.uid)

  const userDocPath = computed(function () {
    if (uid.value) {
      //                      data/users/id
      return doc(collection(db, 'users'), uid?.value)
    } else {
      return 'asdfjsak;dlfjas'
    }
  })

  const { data: docUser, promise: getUserDoc } = useDocument(userDocPath)

  const firstName = computed(() => docUser.value.firstName)

  async function createUserDocument(uid, form) {
    await setDoc(doc(db, 'users', uid), {
      firstName: form.firstName
    })
  }

  function signUp(form) {
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        const user = userCredential.user
        createUserDocument(user.uid, form)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  function signIn(form) {
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        const user = userCredential.user
        alert(`signed in as ${user.email}`)
        router.push('/account')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  function signOut() {
    fbSignOut(auth)
      .then(() => {
        alert('signed out')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return {
    name,
    email,
    uid,
    firstName,

    signUp,
    signIn,
    signOut,

    getUserDoc
  }
})
