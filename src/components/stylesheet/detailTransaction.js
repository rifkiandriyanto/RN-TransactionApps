import {StyleSheet} from 'react-native';
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edf4f0',
  },
  cardDetail: {
    backgroundColor: 'white',
    marginTop: 50,
  },
  idtrx: {
    borderBottomWidth: 1,
    borderBottomColor: '#f3f3f3',
  },
  textDetail: {
    borderBottomWidth: 1.2,
    borderBottomColor: '#ccc',
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  trxContent: {
    marginHorizontal: 25,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  transfer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    paddingHorizontal: 25,
  },
  sectionLeft: {width: '60%'},
  sectionRight: {width: '40%'},
  sectionDetail: {
    flexDirection: 'row',
    paddingHorizontal: 25,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  bankText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  secondHeader: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  eachData: {
    marginVertical: 15,
  },
  eachValue: {
    fontSize: 15,
  },
  backText: {
    color: '#ff6246',
    fontSize: 17,
  },
  copy: {width: 45},
  copyIcon: {
    width: 17,
    height: 20.5,
    marginLeft: 7,
  },
});

export default Styles;
