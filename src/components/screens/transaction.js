import React from 'react';
import {
  View,
  Text,
  FlatList,
  StatusBar,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {getTransaction} from '../redux/actions/transaction';
import {connect} from 'react-redux';
import {Item, Input, ListItem, Left, Radio} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateGenerator from '../helpers/dateGenerator';
import NumberGenerator from '../helpers/numberGenerator';
import CapitalizeCheck from '../helpers/capitalGenerator';
import Styles from '../stylesheet/transaction';

class Transaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noFilteredData: [],
      data: [],
      search: '',
      modalShow: false,
      isFetching: false,
      sortBy: [
        'SORT',
        'a-Z',
        'z-A',
        'Lastest Transaction',
        'Current Transaction',
      ],
      activeSort: 'SORT',
    };
  }
  componentDidMount() {
    this.getTransaction();
  }

  componentDidUpdate() {
    if (this.state.noFilteredData.length < 1) {
      let data = [];
      Object.keys(this.props.transaction).map((e) => {
        let newData = this.props.transaction[e];
        data.push(newData);
        this.setState({
          noFilteredData: data,
          data,
        });
      });
    }
  }

  reFreshScreen = () => {
    this.setState({isFetching: true, noFilteredData: []});
    this.getTransaction();
    this.setState({isFetching: false});
  };

  getTransaction() {
    this.props.dispatch(getTransaction());
  }

  searchTransaction = (text) => {
    let newData = this.state.noFilteredData.filter((preData) => {
      let name = preData.beneficiary_name
        .toLowerCase()
        .match(text.toLowerCase());
      let beneficiary_bank = preData.beneficiary_bank
        .toLowerCase()
        .match(text.toLowerCase());
      let sender_bank = preData.sender_bank
        .toLowerCase()
        .match(text.toLowerCase());
      let amount = preData.amount
        .toString()
        .toLowerCase()
        .match(text.toLowerCase());
      return name + amount + beneficiary_bank + sender_bank;
    });
    if (text !== '') {
      this.setState({data: newData, search: text});
    } else {
      this.setState({data: this.state.noFilteredData, search: text});
    }
  };

  sorting = (sortType) => {
    let result = this.state.noFilteredData.sort((a, b) => {
      if (sortType === 'Nama A-Z') {
        return (
          a.beneficiary_name.toLowerCase() > b.beneficiary_name.toLowerCase()
        );
      } else if (sortType === 'Nama Z-A') {
        return (
          b.beneficiary_name.toLowerCase() > a.beneficiary_name.toLowerCase()
        );
      } else if (sortType === 'Tanggal Terlama') {
        return b.created_at < a.created_at;
      } else if (sortType === 'Tanggal Terbaru') {
        return a.created_at < b.created_at;
      } else {
        return a.created_at < b.created_at;
      }
    });
    this.setState({
      data: result,
      activeSort: sortType,
      modalShow: false,
      search: '',
    });
  };

  renderRow = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Detail', {data: item})}>
        <View style={Styles.card}>
          <View
            style={
              item.status === 'SUCCESS'
                ? Styles.successIndicator
                : Styles.pendingIndicator
            }
          />
          <View style={Styles.cardContent}>
            <View>
              <View style={Styles.transfer}>
                <Text style={Styles.bankText}>
                  <CapitalizeCheck bankName={item.sender_bank} />{' '}
                </Text>
                <Icon name="arrow-forward" style={Styles.bankText} />
                <Text style={Styles.bankText}>
                  {' '}
                  <CapitalizeCheck bankName={item.beneficiary_bank} />
                </Text>
              </View>
              <Text style={Styles.beneficiery}>
                {item.beneficiary_name.toUpperCase()}
              </Text>
              <View style={Styles.transfer}>
                <Text style={Styles.amount}>
                  Rp
                  <NumberGenerator data={item.amount} />{' '}
                </Text>
                <Icon name="lens" style={Styles.dot} />
                <Text style={Styles.date}>
                  {' '}
                  <DateGenerator data={item.created_at.substr(0, 10)} />
                </Text>
              </View>
            </View>
            <View
              style={
                item.status === 'SUCCESS' ? Styles.success : Styles.pending
              }>
              <Text
                style={
                  item.status === 'SUCCESS'
                    ? Styles.successText
                    : Styles.pendingText
                }>
                {item.status === 'SUCCESS' ? 'SUCCESS' : 'PENDING'}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={
            this.state.modalShow ?  '#b6f0cf' : '#edf4f0'
          }
        />
        <View style={Styles.contentContainer}>
          <View style={Styles.search}>
            <Item style={Styles.searchItem}>
              <Icon name="search" style={Styles.searchIcon} />
              <Input
                placeholder="Search for a name, bank, or nominal"
                style={Styles.searchInput}
                onChangeText={(text) => this.searchTransaction(text)}
                value={this.state.search}
              />
              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    modalShow: true,
                  })
                }>
                <View style={Styles.sort}>
                  <Text style={Styles.sortText}>{this.state.activeSort}</Text>
                  <Image
                    source={require('../icons/keyboard_arrow_down.png')}
                    style={Styles.sortIcon}
                  />
                </View>
              </TouchableOpacity>
            </Item>
          </View>

          <Modal visible={this.state.modalShow} transparent={true}>
            <TouchableOpacity
              style={Styles.full}
              onPress={() => this.setState({modalShow: false})}>
              <View style={Styles.modalOverlay}>
                <View style={Styles.modalContent}>
                  {this.state.sortBy.map((sortType, index) => (
                    <ListItem
                      style={Styles.listItem}
                      key={index}
                      onPress={() => this.sorting(sortType)}>
                      <Left>
                        <Radio
                          onPress={() => this.sorting(sortType)}
                          selected={
                            sortType === this.state.activeSort ? true : false
                          }
                          color="#ff6246"
                          selectedColor={'#ff6246'}
                        />
                        <Text style={Styles.listItemText}>{sortType}</Text>
                      </Left>
                    </ListItem>
                  ))}
                </View>
              </View>
            </TouchableOpacity>
          </Modal>

        
            <FlatList
              style={Styles.flatList}
              onRefresh={() => this.reFreshScreen()}
              refreshing={this.state.isFetching}
              showsVerticalScrollIndicator={false}
              data={this.state.data}
              renderItem={this.renderRow}
              keyExtractor={(item) => item.id}
            />
        </View>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    transaction: state.transaction.transaction
  };
};

export default connect(mapStateToProps)(Transaction);
