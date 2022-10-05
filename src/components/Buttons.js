import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import React from 'react';

import { Colors, ImageSet } from '../config/Constant';
import { H3, RegularBoldWhiteText } from '../components/Texts';
import { UnderLinedText } from '../components/Texts';

export function ModalButton({ text, onPress }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: Colors.white,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color: Colors.black,
          fontWeight: 'bold',
          fontSize: 16,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}
export function FilterButton({ onPress, moreStyles }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={ImageSet.filter_black}
        style={{ ...styles.backButton, ...moreStyles }}
      />
    </TouchableOpacity>
  );
}
export function SearchButton({ onPress, moreStyles }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={ImageSet.search_black}
        style={{ ...styles.backButton, ...moreStyles }}
      />
    </TouchableOpacity>
  );
}

export function BackButton({ onPress, moreStyles }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={ImageSet.back_icon}
        style={{ ...styles.backButton, ...moreStyles }}
      />
    </TouchableOpacity>
  );
}

export function UnderLinedButton({ text, onPress, textStyle, moreStyles }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...styles.baseButton, ...moreStyles }}
    >
      <UnderLinedText content={text} moreStyles={textStyle} />
    </TouchableOpacity>
  );
}

export function CurvedButton({
  onPress,
  imageUrl,
  outline,
  text,
  moreStyles,
  loading,
}) {
  const extraViewStyle = outline
    ? {
        borderWidth: 1,
        borderColor: Colors.black,
        backgroundColor: Colors.white,
      }
    : {};

  const extraTextstyle = outline ? { color: Colors.black } : {};
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        style={{ ...styles.curvedButton, ...extraViewStyle, ...moreStyles }}
      >
        {loading ? (
          <ActivityIndicator size={'small'} color={'white'} />
        ) : (
          <View style={{ flexDirection: 'row' }}>
            {imageUrl && (
              <Image
                source={imageUrl}
                style={[
                  styles.curvedButtonImage,
                  { marginRight: 8, marginLeft: 8 },
                ]}
              />
            )}
            {text && (
              <RegularBoldWhiteText
                content={text}
                moreStyles={{ fontSize: 12, ...extraTextstyle }}
              />
            )}
          </View>
        )}
      </TouchableOpacity>
    </>
  );
}

export function PlusButton({ onPress }) {
  return (
    <ParentCircleButton onPress={onPress} imageUrl={ImageSet.plus} size={56} />
  );
}

export function CircleCameraButton({ onPress, selected }) {
  const selectedStyle = selected
    ? {
        backgroundColor: Colors.black,
      }
    : {
        backgroundColor: Colors.white,
      };
  const finalImageUrl = selected ? ImageSet.camera_bold : ImageSet.camera_thin;
  return (
    <ParentCircleButton
      onPress={onPress}
      imageUrl={finalImageUrl}
      moreStyles={{
        shadowOffset: null,
        shadowOpacity: null,
        shadowRadius: null,
        ...selectedStyle,
      }}
      size={40}
    />
  );
}

export function CircleGalleryButton({ onPress, selected }) {
  const selectedStyle = selected
    ? {
        backgroundColor: Colors.black,
      }
    : {
        backgroundColor: Colors.white,
      };
  const finalImageUrl = selected
    ? ImageSet.gallery_black
    : ImageSet.gallery_white;
  return (
    <ParentCircleButton
      onPress={onPress}
      imageUrl={finalImageUrl}
      moreStyles={{
        shadowOffset: null,
        shadowOpacity: null,
        shadowRadius: null,
        ...selectedStyle,
      }}
      size={40}
    />
  );
}

export function CircleSearchButton({ onPress, selected }) {
  const selectedStyle = selected
    ? {
        backgroundColor: Colors.black,
      }
    : {
        backgroundColor: Colors.white,
      };
  const finalImageUrl = selected
    ? ImageSet.search_white
    : ImageSet.search_black;
  return (
    <ParentCircleButton
      onPress={onPress}
      imageUrl={finalImageUrl}
      moreStyles={{
        shadowOffset: null,
        shadowOpacity: null,
        shadowRadius: null,
        ...selectedStyle,
      }}
      size={40}
    />
  );
}

export function CircleUPCButton({ onPress, selected }) {
  const selectedStyle = selected
    ? {
        backgroundColor: Colors.black,
      }
    : {
        backgroundColor: Colors.white,
      };
  const finalImageUrl = selected ? ImageSet.upc_white : ImageSet.upc_black;
  return (
    <ParentCircleButton
      onPress={onPress}
      imageUrl={finalImageUrl}
      moreStyles={{
        shadowOffset: null,
        shadowOpacity: null,
        shadowRadius: null,
        ...selectedStyle,
      }}
      size={40}
    />
  );
}

export function CircleBorderCameraButton({ onPress, text }) {
  return (
    <ParentCircleButton
      onPress={onPress}
      imageUrl={ImageSet.camera_thin}
      moreStyles={{
        backgroundColor: Colors.white,
        borderWidth: 0.5,
        shadowColor: '#171717',
        shadowOffset: null,
        shadowOpacity: null,
        shadowRadius: null,
      }}
      text={text}
    />
  );
}
function ParentCircleButton({ text, onPress, imageUrl, size, moreStyles }) {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.circleButton,
          {
            width: 50 || size,
            height: 50 || size,
            borderRadius: 50 || size / 2,
          },
          {
            ...moreStyles,
          },
        ]}
      >
        <Image source={imageUrl} style={styles.circleButtonImage} />
      </TouchableOpacity>
      {text && (
        <H3
          content={text}
          moreStyles={{
            textAlign: 'center',
            color: Colors.black,
            fontWeight: 'bold',
            fontSize: 12,
          }}
        />
      )}
    </View>
  );
}

export function LongButton({
  loading,
  title,
  containerStyle,
  isNotBottom,
  titleStyle,
  buttonStyle,
  onPress,
  disabled,
}) {
  return (
    <View style={!isNotBottom && [styles.containerStyle, containerStyle]}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPress}
        disabled={disabled}
        style={[
          styles.buttonStyle,
          buttonStyle,
          disabled && styles.disabledStyle,
        ]}
      >
        {loading ? (
          <ActivityIndicator size={'small'} color={Colors.white} />
        ) : (
          <Text
            style={[styles.title, titleStyle, disabled && styles.disabledStyle]}
          >
            {title}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  baseButton: {},
  circleButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.black,
    alignContent: 'center',
    justifyContent: 'center',
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  circleButtonImage: {
    width: 24,
    height: 24,
    alignSelf: 'center',
  },
  curvedButton: {
    height: 50,
    width: 300,
    borderRadius: 25,
    backgroundColor: Colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  curvedButtonImage: {
    width: 24,
    height: 24,
  },
  backButton: {
    width: 24,
    height: 24,
  },
  backButtonImage: {
    width: 24,
    height: 24,
  },
  containerStyle: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  title: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '600',
    alignSelf: 'center',
    textAlign: 'center',
  },
  buttonStyle: {
    height: 64,
    width: '90%',
    backgroundColor: Colors.black,
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  disabledStyle: {
    backgroundColor: '#A4D7FF',
    color: Colors.lightGray,
  },
});
