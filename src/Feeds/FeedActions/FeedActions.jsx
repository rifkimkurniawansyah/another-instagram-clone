import { TouchableOpacity, View } from "react-native";
import { FontAwesome6 } from '@expo/vector-icons';
import ReusableHeader from "../../components/ReusableHeader.component";


const LeftSideComponent = (props) => {
    return (
        <>
            <TouchableOpacity>
                <FontAwesome6 name="heart" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={props.onCommentPressed}>
                <FontAwesome6 name="comment" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome6 name="paper-plane" size={20} color="black" />
            </TouchableOpacity>
        </>
    );
};

const RightSideComponent = (props) => {
    return (
        <TouchableOpacity>
            <FontAwesome6 name="bookmark" size={20} color="black" />
        </TouchableOpacity>
    );
};

const FeedActions = (props) => {

    return (
        <View>
            <ReusableHeader
                paddingVertical={10}
                leftSideComponent={<LeftSideComponent onCommentPressed={props.onCommentPressed} />}
                rightSideComponent={RightSideComponent(props)} // sama saja dengan diatas
            />
        </View>
    );
};

export default FeedActions;
