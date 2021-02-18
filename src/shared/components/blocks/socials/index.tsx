import * as React from 'react'
import { styled } from '@components/foundations'
import { ButtonWrapper } from '@components/elements'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagramSquare,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

const Container = styled.div`
  display: flex;
  align-items: center;
  > button {
    :not(:last-child) {
      margin-right: ${p => p.theme.spacing(3)};
    }
  }
`

const SocialItem = styled.a`
  color: ${p => p.theme.color.neutral['500']};
`
const Icon = styled(FontAwesomeIcon)`
  font-size: ${p => p.theme.font.size.lg};
`

const Socials = () => {
  const sns = [
    { icon: faFacebook, url: 'https://example.com' },
    { icon: faTwitter, url: 'https://example.com' },
    { icon: faInstagramSquare, url: 'https://example.com' },
  ]
  return (
    <Container>
      {sns.map((s, idx) => (
        <ButtonWrapper key={idx}>
          <SocialItem href={s.url} target="_blank" rel="noreferrer">
            <Icon icon={s.icon} />
          </SocialItem>
        </ButtonWrapper>
      ))}
    </Container>
  )
}

export default Socials
