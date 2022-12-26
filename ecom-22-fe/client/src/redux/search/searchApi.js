import { searchService } from '../../services/search.service';
import { getResultSearch } from './searchSlice';
export const getResult = async (dispatch, value) => {
    let res = await searchService.getResultSearchApi(value);
    dispatch(getResultSearch(res));
};


