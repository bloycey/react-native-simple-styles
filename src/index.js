import React from "react";
import {
	StyleSheet,
	FlatList as NativeFlatList,
	Text as NativeText,
	View as NativeView,
	TouchableOpacity as NativeTouchableOpacity,
	ScrollView as NativeScrollView,
	Button as NativeButton,
	Image as NativeImage,
	ImageBackground as NativeImageBackground,
	TextInput as NativeTextInput,
	ActivityIndicator as NativeActivityIndicator,
	Modal as NativeModal,
	SectionList as NativeSectionList,
	StatusBar as NativeStatusBar,
	TouchableHighlight as NativeTouchableHighlight,
	TouchableWithoutFeedback as NativeTouchableWithoutFeedback,
	VirtualizedList as NativeVirtualizedList,
} from "react-native";

const reactNativeClasses = (styleSheet) => {
	const classesHOCFn = (styleSheet) => (Component) => ({
		className = "",
		style = {},
		...props
	}) => {
		const rawStyles = className
			.split(" ")
			.reduce((acc, curr) => ({ ...acc, ...styleSheet[curr] }), {});
		const styles = StyleSheet.create({ root: { ...rawStyles, ...style } });
		return <Component {...props} style={styles.root} />;
	};

	const classesHOC = classesHOCFn(styleSheet);
	const FlatList = classesHOC(NativeFlatList);
	const Text = classesHOC(NativeText);
	const View = classesHOC(NativeView);
	const TouchableOpacity = classesHOC(NativeTouchableOpacity);
	const ScrollView = classesHOC(NativeScrollView);
	const Button = classesHOC(NativeButton);
	const Image = classesHOC(NativeImage);
	const ImageBackground = classesHOC(NativeImageBackground);
	const TextInput = classesHOC(NativeTextInput);
	const ActivityIndicator = classesHOC(NativeActivityIndicator);
	const Modal = classesHOC(NativeModal);
	const SectionList = classesHOC(NativeSectionList);
	const StatusBar = classesHOC(NativeStatusBar);
	const TouchableHighlight = classesHOC(NativeTouchableHighlight);
	const TouchableWithoutFeedback = classesHOC(NativeTouchableWithoutFeedback);
	const VirtualizedList = classesHOC(NativeVirtualizedList);

	return {
		classesHOC,
		FlatList,
		Text,
		View,
		TouchableOpacity,
		ScrollView,
		Button,
		Image,
		ImageBackground,
		TextInput,
		ActivityIndicator,
		Modal,
		SectionList,
		StatusBar,
		TouchableHighlight,
		TouchableWithoutFeedback,
		VirtualizedList,
	};
};

export default reactNativeClasses;
