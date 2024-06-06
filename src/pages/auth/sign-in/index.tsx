import { useRef } from 'react'

import { SignInFormValues } from '@/feature/auth/model/utils/validators'
import { SignInForm } from '@/feature/auth/ui/sign-in-form'
import { PageWrapper } from '@/shared/layouts/page-wrapper'
import { ReturnComponent } from '@/shared/types'
import { UseFormRef } from '@/shared/types/form'
import { getLayout } from '@/shared/layouts/base-layout/base-layout'

const SignIn = (): ReturnComponent => {
  const ref = useRef<UseFormRef<SignInFormValues>>(null)
  const handleSubmitForm = (formData: SignInFormValues) => {
    console.log(formData)
  }

  return (
    <PageWrapper paddingTop={'108px'} title={'SignIn | Instagram'}>
      <SignInForm
        hrefGithub={process.env.NEXT_PUBLIC_GITHUB_OAUTH2 ?? ''}
        hrefGoogle={process.env.NEXT_PUBLIC_GOOGLE_OAUTH2 ?? ''}
        onSubmit={handleSubmitForm}
        // disabled={isLoading}
        ref={ref}
      />
    </PageWrapper>
  )
}

SignIn.getLayout = getLayout
export default SignIn
