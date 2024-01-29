import React, {useState} from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import HeaderBar from '../components/HeaderBar';
import CustomIcon from '../shared/CustomIcon';
import {COLORS, FONTSIZE} from '../shared/theme';
import {useStore} from '../store/store';
import CoffeeCard from '../components/CoffeeCard';
import {getCategoriesFromData, getCoffeeList} from '../shared/CommonFunction';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'detail'>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const CoffeeList = useStore((state: any) => state.CoffeeList);
  const BeanList = useStore((state: any) => state.BeanList);

  const [categories, setCategories] = useState(
    getCategoriesFromData(CoffeeList),
  );
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  });
  const [sortedCoffee, setSortedCoffee] = useState(
    getCoffeeList(categoryIndex.category, CoffeeList),
  );

  return (
    <View className="flex-1 bg-slate-900 p-6 pt-14">
      <HeaderBar />
      <ScrollView>
        <Text className="text-white text-2xl font-semibold leading-9 w-52">
          Find the best coffee for you
        </Text>
        {/* Search Input */}
        <View className="flex-row mt-6 rounded-2xl items-center bg-slate-800">
          <CustomIcon
            name="search"
            size={FONTSIZE.size_18}
            color={COLORS.primaryLightGreyHex}
            className="ml-3"
          />
          <TextInput
            className="flex-1 h-12 text-white text-sm p-2 mb-1"
            placeholder="Find your coffee..."
            placeholderTextColor="#ccc"
          />
        </View>
        <FlatList
          // ref={ListRef}
          horizontal
          ListEmptyComponent={
            <View className="items-center justify-center">
              <Text className="text-4xl justify-center text-white">
                No Coffee Available
              </Text>
            </View>
          }
          showsHorizontalScrollIndicator={false}
          data={sortedCoffee}
          className="pt-4"
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.p('detail', {
                    index: item.index,
                    id: item.id,
                    type: item.type,
                  });
                }}>
                <CoffeeCard
                  id={item.id}
                  index={item.index}
                  type={item.type}
                  roasted={item.roasted}
                  imagelink_square={item.imagelink_square}
                  name={item.name}
                  special_ingredient={item.special_ingredient}
                  average_rating={item.average_rating}
                  price={item.prices[2]}
                  // buttonPressHandler={CoffeCardAddToCart}
                />
              </TouchableOpacity>
            );
          }}
        />
        <Text className="text-white text-base font-semibold mt-5">
          Coffee Beans
        </Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={BeanList}
          className="mt-3 pb-10"
          // contentContainerStyle={[
          //   styles.FlatListContainer,
          //   {marginBottom: tabBarHeight},
          // ]}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.push('detail', {
                    index: item.index,
                    id: item.id,
                    type: item.type,
                  });
                }}>
                <CoffeeCard
                  id={item.id}
                  index={item.index}
                  type={item.type}
                  roasted={item.roasted}
                  imagelink_square={item.imagelink_square}
                  name={item.name}
                  special_ingredient={item.special_ingredient}
                  average_rating={item.average_rating}
                  price={item.prices[2]}
                  // buttonPressHandler={CoffeCardAddToCart}
                />
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
