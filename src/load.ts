import "./lib/babelRegister";
import "./lib/polyfills";
import "./lib/coreMocks";

import { replace, replaceEsm } from "./helpers/commons";
import { AnimatedMock } from "./lib/Animated/AnimatedMock";
import { AccessibilityInfoMock } from "./lib/Components/AccessibilityInfo";
import { ActivityIndicatorMock } from "./lib/Components/ActivityIndicator";
import { AppStateMock } from "./lib/Components/AppState";
import { ClipboardMock } from "./lib/Components/Clipboard";
import { ImageMock } from "./lib/Components/Image";
import { ModalMock } from "./lib/Components/Modal";
import { RefreshControlMock } from "./lib/Components/RefreshControl";
import { ScrollViewMock } from "./lib/Components/ScrollView";
import { TextMock } from "./lib/Components/Text";
import { TextInputMock } from "./lib/Components/TextInput";
import { VibrationMock } from "./lib/Components/Vibration";
import { ViewMock } from "./lib/Components/View";
import { ViewNativeComponentMock } from "./lib/Components/ViewNativeComponent";

replace("react-native/Libraries/Image/Image", ImageMock);
replace("react-native/Libraries/Text/Text", TextMock);
replace("react-native/Libraries/Components/TextInput/TextInput", TextInputMock);
replace("react-native/Libraries/Modal/Modal", ModalMock);
replaceEsm("react-native/Libraries/Components/AccessibilityInfo/AccessibilityInfo", AccessibilityInfoMock);
replace("react-native/Libraries/Components/Clipboard/Clipboard", ClipboardMock);
replace("react-native/Libraries/Components/RefreshControl/RefreshControl", RefreshControlMock);
replace("react-native/Libraries/Components/ScrollView/ScrollView", ScrollViewMock);
replaceEsm("react-native/Libraries/Components/ActivityIndicator/ActivityIndicator", ActivityIndicatorMock);
replace("react-native/Libraries/AppState/AppState", AppStateMock);
replace("react-native/Libraries/Vibration/Vibration", VibrationMock);
replace("react-native/Libraries/Components/View/View", ViewMock);
replace("react-native/Libraries/Components/View/ViewNativeComponent", ViewNativeComponentMock);
replaceEsm("react-native/Libraries/Animated/Animated", AnimatedMock);

export { };
