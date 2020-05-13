import {StyleSheet} from 'react-native';
const Styles = StyleSheet.create({
  full: {flex: 1},
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#edf4f0',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#edf4f0',
  },
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 7,
    marginBottom: 7,
    flexDirection: 'row',
    borderRadius: 5,
    overflow: 'hidden',
  },
  cardContent: {
    flex: 1,
    paddingVertical: 15,
    paddingLeft: 20,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transfer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  search: {marginHorizontal: 7, marginTop: 7, marginBottom: 5},
  searchItem: {
    backgroundColor: '#fff',
    borderColor: '#fff',
    borderRadius: 8,
  },
  searchIcon: {color: '#ccc', marginLeft: 3, fontSize: 28},
  searchInput: {letterSpacing: 0, fontSize: 14, paddingLeft: 5},
  sort: {flexDirection: 'row', paddingRight: 2},
  sortText: {
    fontSize: 14,
    color: '#ff6246',
    marginRight: -5,
    fontWeight: 'bold',
  },
  sortIcon: {width: 45, height: 18},
  modalOverlay: {
    backgroundColor: 'rgba(0,0,0,.5)',
    flex: 1,
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    marginHorizontal: 25,
    borderRadius: 5,
    paddingTop: 20,
    paddingBottom: 35,
  },
  listItem: {marginTop: 15, borderColor: '#fff'},
  listItemText: {marginLeft: 10, fontSize: 16},
  flatList: {paddingVertical: 5},
  success: {
    backgroundColor: '#5ab483',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pending: {
    borderColor: '#ff6246',
    borderWidth: 2,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  successText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  pendingText: {
    fontWeight: 'bold',
  },
  bankText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  beneficiery: {
    fontSize: 18,
  },
  amount: {
    fontSize: 16,
  },
  date: {
    fontSize: 16,
  },
  dot: {fontSize: 7},
  successIndicator: {backgroundColor: '#5ab483', width: 5},
  pendingIndicator: {backgroundColor: '#ff6246', width: 5},
});

export default Styles;
