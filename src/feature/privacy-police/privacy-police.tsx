import { Flex, ReturnBack, ReturnComponent, Text, useTranslation } from '@/shared'
import React from 'react'

export const PrivacyPolice = (): ReturnComponent => {
  const { t } = useTranslation()

  return (
    <section className={'w-full'}>
      <ReturnBack text={t.button.backToSignUp} />
      <Flex className={'mx-auto w-full max-w-[958px]'} direction={'column'} gap={'14'}>
        <Text asComponent={'h1'} variant={'H1'}>
          {t.pages.privacyPolice.title}
        </Text>
        <Text variant={'regular-text-14'} asComponent={'p'}>
          Текст с сервера
        </Text>
      </Flex>
    </section>
  )
}
