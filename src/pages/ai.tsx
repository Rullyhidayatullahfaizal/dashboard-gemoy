import Head from 'next/head'
import { getPageTitle } from '../config'
import SectionMain from '../components/Section/Main'
import { mdiAlertCircle, mdiReload, mdiWebBox } from '@mdi/js'
import SectionTitleLineWithButton from '../components/Section/TitleLineWithButton'
import { ReactElement } from 'react'
import LayoutAuthenticated from '../layouts/Authenticated'
import CardBox from '../components/CardBox'
import CardBoxUser from '../components/CardBox/User'
import CardBoxWidget from '../components/CardBox/Widget'
import CardBoxComponentTitle from '../components/CardBox/Component/Title'
import Button from '../components/Button'
import Buttons from '../components/Buttons'
import { BubbleChat } from 'flowise-embed-react'

const AiPage = () => {

  const CardSamplesFooter = (
    <Buttons>
      <Button label="Info" color="info" outline />
    </Buttons>
  )
  return (
    <>
      <Head>
        <title>{getPageTitle('Artificial intelligence')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiWebBox}
          title="Artificial intelligence"
          main
        ></SectionTitleLineWithButton>
        <SectionMain>
          <div className='lg:w-1/2 lg:mx-auto mb-6'>
          <CardBox footer={CardSamplesFooter}>
            <CardBoxComponentTitle title="Chat-Bot Makanan">
              <Button icon={mdiReload} color="whiteDark" roundedFull />
            </CardBoxComponentTitle>
            <div className="space-y-3 h-10">
            <BubbleChat
            chatflowid="0604d0d9-f26b-4d1a-925c-439cb49821ba"
            apiHost="http://localhost:3000"
            theme={{
                button: {
                    backgroundColor: "#3B81F6",
                    right: 850,
                    bottom: 520,
                    size: 48, // small | medium | large | number
                    dragAndDrop: true,
                    iconColor: "white",
                    customIconSrc: "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg",
                },
                tooltip: {
                    showTooltip: true,
                    tooltipMessage: 'Hi There 👋!',
                    tooltipBackgroundColor: 'black',
                    tooltipTextColor: 'white',
                    tooltipFontSize: 14,
                    
                },
                chatWindow: {
                    showTitle: true,
                    title: 'Makanan Bot',
                    titleAvatarSrc: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg',
                    showAgentMessages: false,
                    welcomeMessage: 'Hello! This is custom welcome message',
                    errorMessage: 'This is a custom error message',
                    backgroundColor: "#ffffff",
                    height: 550,
                    width: 400,
                    fontSize: 16,
                    poweredByTextColor: "#303235",
                    botMessage: {
                        backgroundColor: "#f7f8ff",
                        textColor: "#303235",
                        showAvatar: true,
                        avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png",
                    },
                    userMessage: {
                        backgroundColor: "#3B81F6",
                        textColor: "#ffffff",
                        showAvatar: true,
                        avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
                    },
                    textInput: {
                        placeholder: 'Type your question',
                        backgroundColor: '#ffffff',
                        textColor: '#303235',
                        sendButtonColor: '#3B81F6',
                        maxChars: 50,
                        maxCharsWarningMessage: 'You exceeded the characters limit. Please input less than 50 characters.',
                        autoFocus: true, // If not used, autofocus is disabled on mobile and enabled on desktop. true enables it on both, false disables it on both.
                        sendMessageSound: true,
                        // sendSoundLocation: "send_message.mp3", // If this is not used, the default sound effect will be played if sendSoundMessage is true.
                        receiveMessageSound: true,
                        // receiveSoundLocation: "receive_message.mp3", // If this is not used, the default sound effect will be played if receiveSoundMessage is true.
                    },
                    feedback: {
                        color: '#303235',
                    },
                    footer: {
                        textColor: '#303235',
                        text: 'Powered by',
                        company: 'gemoy',
                        companyLink: '',
                    }
                }
            }}
        />
            </div>
          </CardBox>
          </div>
        <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
          <CardBox footer={CardSamplesFooter}>
            <CardBoxComponentTitle title="Chat-Bot kelas">
              <Button icon={mdiReload} color="whiteDark" roundedFull />
            </CardBoxComponentTitle>
            <div className="space-y-3 h-10">
            <BubbleChat
            chatflowid="82761d65-5727-4031-9d36-5cf7db27003f"
            apiHost="http://localhost:3000"
            theme={{
                button: {
                    backgroundColor: "#3B81F6",
                    right: 1150,
                    bottom: 260,
                    size: 48, // small | medium | large | number
                    dragAndDrop: true,
                    iconColor: "white",
                    customIconSrc: "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg",
                },
                tooltip: {
                    showTooltip: true,
                    tooltipMessage: 'Hi There 👋! kelas',
                    tooltipBackgroundColor: 'black',
                    tooltipTextColor: 'white',
                    tooltipFontSize: 16,
                },
                chatWindow: {
                    showTitle: true,
                    title: 'Chat-Bot Kelas',
                    titleAvatarSrc: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg',
                    showAgentMessages: true,
                    welcomeMessage: 'Hello! This is custom welcome message',
                    errorMessage: 'This is a custom error message',
                    backgroundColor: "#ffffff",
                    height: 530,
                    width: 400,
                    fontSize: 16,
                    poweredByTextColor: "#303235",
                    botMessage: {
                        backgroundColor: "#f7f8ff",
                        textColor: "#303235",
                        showAvatar: true,
                        avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png",
                    },
                    userMessage: {
                        backgroundColor: "#3B81F6",
                        textColor: "#ffffff",
                        showAvatar: true,
                        avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
                    },
                    textInput: {
                        placeholder: 'Type your question',
                        backgroundColor: '#ffffff',
                        textColor: '#303235',
                        sendButtonColor: '#3B81F6',
                        maxChars: 50,
                        maxCharsWarningMessage: 'You exceeded the characters limit. Please input less than 50 characters.',
                        autoFocus: true, // If not used, autofocus is disabled on mobile and enabled on desktop. true enables it on both, false disables it on both.
                        sendMessageSound: true,
                        // sendSoundLocation: "send_message.mp3", // If this is not used, the default sound effect will be played if sendSoundMessage is true.
                        receiveMessageSound: true,
                        // receiveSoundLocation: "receive_message.mp3", // If this is not used, the default sound effect will be played if receiveSoundMessage is true.
                    },
                    feedback: {
                        color: '#303235',
                    },
                    footer: {
                        textColor: '#303235',
                        text: 'Powered by',
                        company: 'Gemoy',
                        companyLink: '#',
                    }
                }
            }}
        />
            </div>
          </CardBox>
          <CardBox footer={CardSamplesFooter}>
            <CardBoxComponentTitle title="Chat-Bot Guru">
              <Button icon={mdiReload} color="whiteDark" roundedFull />
            </CardBoxComponentTitle>
            <div className="space-y-3 h-10">
            <BubbleChat
            chatflowid="5221be0c-4bcf-47d5-8041-9c6dd3df994e"
            apiHost="http://localhost:3000"
            theme={{
                button: {
                    backgroundColor: "#3B81F6",
                    right: 600,
                    bottom: 260,
                    size: 48, // small | medium | large | number
                    dragAndDrop: true,
                    iconColor: "white",
                    customIconSrc: "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg",
                },
                tooltip: {
                    showTooltip: true,
                    tooltipMessage: 'Hi There 👋! Guru',
                    tooltipBackgroundColor: 'black',
                    tooltipTextColor: 'white',
                    tooltipFontSize: 16,
                },
                chatWindow: {
                    showTitle: true,
                    title: 'Chat-Bot Guru',
                    titleAvatarSrc: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg',
                    showAgentMessages: true,
                    welcomeMessage: 'Hello! This is custom welcome message',
                    errorMessage: 'This is a custom error message',
                    backgroundColor: "#ffffff",
                    height: 530,
                    width: 400,
                    fontSize: 16,
                    poweredByTextColor: "#303235",
                    botMessage: {
                        backgroundColor: "#f7f8ff",
                        textColor: "#303235",
                        showAvatar: true,
                        avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png",
                    },
                    userMessage: {
                        backgroundColor: "#3B81F6",
                        textColor: "#ffffff",
                        showAvatar: true,
                        avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
                    },
                    textInput: {
                        placeholder: 'Type your question',
                        backgroundColor: '#ffffff',
                        textColor: '#303235',
                        sendButtonColor: '#3B81F6',
                        maxChars: 50,
                        maxCharsWarningMessage: 'You exceeded the characters limit. Please input less than 50 characters.',
                        autoFocus: true, // If not used, autofocus is disabled on mobile and enabled on desktop. true enables it on both, false disables it on both.
                        sendMessageSound: true,
                        // sendSoundLocation: "send_message.mp3", // If this is not used, the default sound effect will be played if sendSoundMessage is true.
                        receiveMessageSound: true,
                        // receiveSoundLocation: "receive_message.mp3", // If this is not used, the default sound effect will be played if receiveSoundMessage is true.
                    },
                    feedback: {
                        color: '#303235',
                    },
                    footer: {
                        textColor: '#303235',
                        text: 'Powered by',
                        company: 'Gemoy',
                        companyLink: 'https://flowiseai.com',
                    }
                }
            }}
        />
            </div>
          </CardBox>
          <CardBox footer={CardSamplesFooter}>
            <CardBoxComponentTitle title="Chat-Bot Siswa">
              <Button icon={mdiReload} color="whiteDark" roundedFull />
            </CardBoxComponentTitle>
            <div className="space-y-3 h-10">
            <BubbleChat
            chatflowid="3b688df2-f26c-4cd4-b23f-87c193891177"
            apiHost="http://localhost:3000"
            theme={{
                button: {
                    backgroundColor: "#3B81F6",
                    right: 1150,
                    bottom: 20,
                    size: 48, // small | medium | large | number
                    dragAndDrop: true,
                    iconColor: "white",
                    customIconSrc: "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg",
                },
                tooltip: {
                    showTooltip: true,
                    tooltipMessage: 'Hi There 👋! siswa',
                    tooltipBackgroundColor: 'black',
                    tooltipTextColor: 'white',
                    tooltipFontSize: 16,
                },
                chatWindow: {
                    showTitle: true,
                    title: 'chat-bot siswa',
                    titleAvatarSrc: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg',
                    showAgentMessages: true,
                    welcomeMessage: 'Hello! This is custom welcome message',
                    errorMessage: 'This is a custom error message',
                    backgroundColor: "#ffffff",
                    height: 700,
                    width: 400,
                    fontSize: 16,
                    poweredByTextColor: "#303235",
                    botMessage: {
                        backgroundColor: "#f7f8ff",
                        textColor: "#303235",
                        showAvatar: true,
                        avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png",
                    },
                    userMessage: {
                        backgroundColor: "#3B81F6",
                        textColor: "#ffffff",
                        showAvatar: true,
                        avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
                    },
                    textInput: {
                        placeholder: 'Type your question',
                        backgroundColor: '#ffffff',
                        textColor: '#303235',
                        sendButtonColor: '#3B81F6',
                        maxChars: 50,
                        maxCharsWarningMessage: 'You exceeded the characters limit. Please input less than 50 characters.',
                        autoFocus: true, // If not used, autofocus is disabled on mobile and enabled on desktop. true enables it on both, false disables it on both.
                        sendMessageSound: true,
                        // sendSoundLocation: "send_message.mp3", // If this is not used, the default sound effect will be played if sendSoundMessage is true.
                        receiveMessageSound: true,
                        // receiveSoundLocation: "receive_message.mp3", // If this is not used, the default sound effect will be played if receiveSoundMessage is true.
                    },
                    feedback: {
                        color: '#303235',
                    },
                    footer: {
                        textColor: '#303235',
                        text: 'Powered by',
                        company: 'Gemoy',
                        companyLink: '#',
                    }
                }
            }}
        />
            </div>
          </CardBox>
          <CardBox footer={CardSamplesFooter}>
            <CardBoxComponentTitle title="Chat-Bot Scan-History">
              <Button icon={mdiReload} color="whiteDark" roundedFull />
            </CardBoxComponentTitle>
            <div className="space-y-3 h-10">
            <BubbleChat
            chatflowid="9ea46626-b78b-4049-ba27-5dc2893f0db8"
            apiHost="http://localhost:3000"
            theme={{
                button: {
                    backgroundColor: "#3B81F6",
                    right: 600,
                    bottom: 20,
                    size: 48, // small | medium | large | number
                    dragAndDrop: true,
                    iconColor: "white",
                    customIconSrc: "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg",
                },
                tooltip: {
                    showTooltip: true,
                    tooltipMessage: 'Hi There 👋! scan',
                    tooltipBackgroundColor: 'black',
                    tooltipTextColor: 'white',
                    tooltipFontSize: 16,
                },
                chatWindow: {
                    showTitle: true,
                    title: 'Chat-Bot ScanHistory',
                    titleAvatarSrc: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg',
                    showAgentMessages: true,
                    welcomeMessage: 'Hello! This is custom welcome message',
                    errorMessage: 'This is a custom error message',
                    backgroundColor: "#ffffff",
                    height: 700,
                    width: 400,
                    fontSize: 16,
                    poweredByTextColor: "#303235",
                    botMessage: {
                        backgroundColor: "#f7f8ff",
                        textColor: "#303235",
                        showAvatar: true,
                        avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png",
                    },
                    userMessage: {
                        backgroundColor: "#3B81F6",
                        textColor: "#ffffff",
                        showAvatar: true,
                        avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
                    },
                    textInput: {
                        placeholder: 'Type your question',
                        backgroundColor: '#ffffff',
                        textColor: '#303235',
                        sendButtonColor: '#3B81F6',
                        maxChars: 50,
                        maxCharsWarningMessage: 'You exceeded the characters limit. Please input less than 50 characters.',
                        autoFocus: true, // If not used, autofocus is disabled on mobile and enabled on desktop. true enables it on both, false disables it on both.
                        sendMessageSound: true,
                        // sendSoundLocation: "send_message.mp3", // If this is not used, the default sound effect will be played if sendSoundMessage is true.
                        receiveMessageSound: true,
                        // receiveSoundLocation: "receive_message.mp3", // If this is not used, the default sound effect will be played if receiveSoundMessage is true.
                    },
                    feedback: {
                        color: '#303235',
                    },
                    footer: {
                        textColor: '#303235',
                        text: 'Powered by',
                        company: 'Gemoy',
                        companyLink: '',
                    }
                }
            }}
        />
            </div>
          </CardBox>

        </div>        
      </SectionMain>
      </SectionMain>
    </>
  )
}

AiPage.getLayout = function getLayout(page: ReactElement) {
    return <LayoutAuthenticated>{page}</LayoutAuthenticated>
  }

export default AiPage
