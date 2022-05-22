import React, { useContext, useEffect } from 'react'
import { View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native'
import { useTheme } from 'react-native-paper';
import { ChatContex } from '../Contexts/ChatContex';

// İcons
import Call2 from '../Assets/SvgIconsComponents/Call2'
import VideoCall2 from '../Assets/SvgIconsComponents/VideoCall2'
import Write2 from '../Assets/SvgIconsComponents/Write2'
import IconGalery from '../Assets/SvgIconsComponents/IconGalery'
import IconSearch from '../Assets/SvgIconsComponents/IconSearch'
import IconStar from '../Assets/SvgIconsComponents/IconStar'
import Back from '../Assets/SvgIconsComponents/Back'
import ChevronRight from '../Assets/SvgIconsComponents/ChevronRight'

const { width } = Dimensions.get('window')

import GeneralStyles from '../Styles/GeneralStyles';

import Header from '../Components/Header';
import Title from '../Fonts/Title';
import SubTitle from '../Fonts/SubTitle';

const Icons = [
    { icon: <Write2 width={36} height={36} /> },
    { icon: <VideoCall2 width={36} height={36} /> },
    { icon: <Call2 width={36} height={36} /> },
]

const ButtonList = [
    { icon: <IconGalery width={36} height={36} />, title: "Medya, Bağlantılar ve Belgeler" },
    { icon: <IconSearch width={36} height={36} />, title: "Mesajlarda ara" },
    { icon: <IconStar width={36} height={36} />, title: "Yıldızlı mesajlar" },
]

export default function ContactInfoSc(props) {
    const { colors } = useTheme()
    const { DetailsOfSelectedChat } = useContext(ChatContex)
    const { Aboutme, Name, Number, ProfilePhoto } = DetailsOfSelectedChat

    const goBack = () => props.navigation.goBack()

    return (
        <View style={[GeneralStyles.container, { backgroundColor: colors.background }]}>
            <Header
                left={{ content: <Back />, onPress: () => goBack() }}
                center={{ content: <Title>İletişim Bilgileri</Title> }}
                right={{ content: <Title style={{ color: colors.primary }}>Düzenle</Title> }}
            />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={[styles.imageView]}>
                    <Image style={{ width: width, height: width }} source={{ uri: ProfilePhoto }} />
                </View>
                <View style={[styles.aboutContainer, { backgroundColor: colors.surface }]}>
                    <View style={[styles.aboutView, { borderColor: colors.border }]}>
                        <View style={{ flex: 1 }}>
                            <Title style={{ marginVertical: 4 }} >{Name}</Title>
                            <SubTitle>{Number}</SubTitle>
                        </View>
                        <View style={[styles.iconView]}>
                            {Icons.map((el, index) => {
                                return <View style={{ marginHorizontal: 4 }} key={index.toString()}>{el.icon}</View>
                            })}
                        </View>
                    </View>
                    <View style={[styles.aboutView, { borderColor: colors.surface }]}>
                        <SubTitle>{Aboutme}</SubTitle>
                    </View>
                </View>
                <View style={[styles.aboutContainer, { backgroundColor: colors.surface, marginTop: 16 }]}>
                    <View>
                        {ButtonList.map((el, index) => {
                            return <View key={index.toString()} style={[styles.buttonListView, { borderColor: colors.border }]}>
                                {el.icon}
                                <SubTitle style={{ marginLeft: 8, flex: 1 }}>{el.title}</SubTitle>
                                <ChevronRight color={colors.disabled} />
                            </View>
                        })}
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    aboutContainer: {
        paddingLeft: 16
    },
    aboutView: {
        borderBottomWidth: 0.5,
        flexDirection: "row",
        padding: 10
    },
    iconView: {
        flexDirection: "row",
        alignItems: "center"
    },
    buttonListView: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 0.5,
        padding: 6
    }
})

