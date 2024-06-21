import supabase from './supabase';

export const fetchReviewsByLatest = async (onlyTrueHashtagObj, idsOfCafesInMap, viewAll, cafeSearchText) => {
  //지역 필터 없음
  if (viewAll) {
    // 검색어 필터 없음
    if (cafeSearchText.length === 0) {
      // 선택된 해시태그 카테고리 없음
      if (Object.keys(onlyTrueHashtagObj).length === 0) {
        const response = await supabase
          .from('reviews')
          .select()
          .eq('해시태그 없음', true)
          .order('created_at', { ascending: false });
        return response.data;
      }
      // 모든 해시태그 카테고리가 선택됨
      else if (Object.keys(onlyTrueHashtagObj).length === 6) {
        const response = await supabase.from('reviews').select().order('created_at', { ascending: false });
        return response.data;
      }
      //일부 해시태그 카테고리가 선택됨
      else {
        const generateApiText = () => {
          let filterApiText = '';
          Object.keys(onlyTrueHashtagObj).forEach((key) => {
            filterApiText = filterApiText + `${key}.eq. true,`;
          });
          filterApiText = filterApiText.substring(0, filterApiText.length - 2);
          return filterApiText;
        };

        const response = await supabase
          .from('reviews')
          .select()
          .or(generateApiText())
          .order('created_at', { ascending: false });
        return response.data;
      }
    }
    // 검색어 필터 있음
    else {
      // 선택된 해시태그 카테고리 없음
      if (Object.keys(onlyTrueHashtagObj).length === 0) {
        const response = await supabase
          .from('reviews')
          .select()
          .eq('해시태그 없음', true)
          .ilike('cafe_name', `%${cafeSearchText}%`)
          .order('created_at', { ascending: false });
        return response.data;
      }
      // 모든 해시태그 카테고리가 선택됨
      else if (Object.keys(onlyTrueHashtagObj).length === 6) {
        const response = await supabase
          .from('reviews')
          .select()
          .ilike('cafe_name', `%${cafeSearchText}%`)
          .order('created_at', { ascending: false });
        return response.data;
      }
      //일부 해시태그 카테고리가 선택됨
      else {
        const generateApiText = () => {
          let filterApiText = '';
          Object.keys(onlyTrueHashtagObj).forEach((key) => {
            filterApiText = filterApiText + `${key}.eq. true,`;
          });
          filterApiText = filterApiText.substring(0, filterApiText.length - 2);
          return filterApiText;
        };

        const response = await supabase
          .from('reviews')
          .select()
          .or(generateApiText())
          .ilike('cafe_name', `%${cafeSearchText}%`)
          .order('created_at', { ascending: false });
        return response.data;
      }
    }
  }
  // 지역 필터 있음
  else {
    // 검색어 필터 없음
    if (cafeSearchText.length === 0) {
      // 선택된 해시태그 카테고리 없음
      if (Object.keys(onlyTrueHashtagObj).length === 0) {
        const response = await supabase
          .from('reviews')
          .select()
          .eq('해시태그 없음', true)
          .in('cafe_id', idsOfCafesInMap)
          .order('created_at', { ascending: false });
        return response.data;
      }
      // 해시태그 카테고리 전체 선택됨
      else if (Object.keys(onlyTrueHashtagObj).length === 6) {
        const response = await supabase
          .from('reviews')
          .select()
          .in('cafe_id', idsOfCafesInMap)
          .order('created_at', { ascending: false });
        return response.data;
      }
      // 해시태그 카테고리가 일부만 선택됨
      else {
        const generateApiText = () => {
          let filterApiText = '';
          Object.keys(onlyTrueHashtagObj).forEach((key) => {
            filterApiText = filterApiText + `${key}.eq. true,`;
          });
          filterApiText = filterApiText.substring(0, filterApiText.length - 2);
          return filterApiText;
        };

        const response = await supabase
          .from('reviews')
          .select()
          .in('cafe_id', idsOfCafesInMap)
          .or(generateApiText())
          .order('created_at', { ascending: false });
        return response.data;
      }
    }
    // 검색어 필터 있음
    else {
      // 선택된 해시태그 카테고리 없음
      if (Object.keys(onlyTrueHashtagObj).length === 0) {
        const response = await supabase
          .from('reviews')
          .select()
          .eq('해시태그 없음', true)
          .in('cafe_id', idsOfCafesInMap)
          .ilike('cafe_name', `%${cafeSearchText}%`)
          .order('created_at', { ascending: false });
        return response.data;
      }
      // 해시태그 카테고리 전체 선택됨
      else if (Object.keys(onlyTrueHashtagObj).length === 6) {
        const response = await supabase
          .from('reviews')
          .select()
          .in('cafe_id', idsOfCafesInMap)
          .ilike('cafe_name', `%${cafeSearchText}%`)
          .order('created_at', { ascending: false });
        return response.data;
      }
      // 해시태그 카테고리가 일부만 선택됨
      else {
        const generateApiText = () => {
          let filterApiText = '';
          Object.keys(onlyTrueHashtagObj).forEach((key) => {
            filterApiText = filterApiText + `${key}.eq. true,`;
          });
          filterApiText = filterApiText.substring(0, filterApiText.length - 2);
          return filterApiText;
        };

        const response = await supabase
          .from('reviews')
          .select()
          .in('cafe_id', idsOfCafesInMap)
          .or(generateApiText())
          .ilike('cafe_name', `%${cafeSearchText}%`)
          .order('created_at', { ascending: false });
        return response.data;
      }
    }
  }
};

export const fetchReviewsByOldest = async (onlyTrueHashtagObj, idsOfCafesInMap, viewAll, cafeSearchText) => {
  //지역 필터 없음
  if (viewAll) {
    // 검색어 필터 없음
    if (cafeSearchText.length === 0) {
      // 선택된 해시태그 카테고리 없음
      if (Object.keys(onlyTrueHashtagObj).length === 0) {
        const response = await supabase
          .from('reviews')
          .select()
          .eq('해시태그 없음', true)
          .order('created_at', { ascending: true });
        return response.data;
      }
      // 모든 해시태그 카테고리가 선택됨
      else if (Object.keys(onlyTrueHashtagObj).length === 6) {
        const response = await supabase.from('reviews').select().order('created_at', { ascending: true });
        return response.data;
      }
      //일부 해시태그 카테고리가 선택됨
      else {
        const generateApiText = () => {
          let filterApiText = '';
          Object.keys(onlyTrueHashtagObj).forEach((key) => {
            filterApiText = filterApiText + `${key}.eq. true,`;
          });
          filterApiText = filterApiText.substring(0, filterApiText.length - 2);
          return filterApiText;
        };

        const response = await supabase
          .from('reviews')
          .select()
          .or(generateApiText())
          .order('created_at', { ascending: true });
        return response.data;
      }
    }
    // 검색어 필터 있음
    else {
      // 선택된 해시태그 카테고리 없음
      if (Object.keys(onlyTrueHashtagObj).length === 0) {
        const response = await supabase
          .from('reviews')
          .select()
          .eq('해시태그 없음', true)
          .ilike('cafe_name', `%${cafeSearchText}%`)
          .order('created_at', { ascending: true });
        return response.data;
      }
      // 모든 해시태그 카테고리가 선택됨
      else if (Object.keys(onlyTrueHashtagObj).length === 6) {
        const response = await supabase
          .from('reviews')
          .select()
          .ilike('cafe_name', `%${cafeSearchText}%`)
          .order('created_at', { ascending: true });
        return response.data;
      }
      //일부 해시태그 카테고리가 선택됨
      else {
        const generateApiText = () => {
          let filterApiText = '';
          Object.keys(onlyTrueHashtagObj).forEach((key) => {
            filterApiText = filterApiText + `${key}.eq. true,`;
          });
          filterApiText = filterApiText.substring(0, filterApiText.length - 2);
          return filterApiText;
        };

        const response = await supabase
          .from('reviews')
          .select()
          .or(generateApiText())
          .ilike('cafe_name', `%${cafeSearchText}%`)
          .order('created_at', { ascending: true });
        return response.data;
      }
    }
  }
  // 지역 필터 있음
  else {
    // 검색어 필터 없음
    if (cafeSearchText.length === 0) {
      // 선택된 해시태그 카테고리 없음
      if (Object.keys(onlyTrueHashtagObj).length === 0) {
        const response = await supabase
          .from('reviews')
          .select()
          .eq('해시태그 없음', true)
          .in('cafe_id', idsOfCafesInMap)
          .order('created_at', { ascending: true });
        return response.data;
      }
      // 해시태그 카테고리 전체 선택됨
      else if (Object.keys(onlyTrueHashtagObj).length === 6) {
        const response = await supabase
          .from('reviews')
          .select()
          .in('cafe_id', idsOfCafesInMap)
          .order('created_at', { ascending: true });
        return response.data;
      }
      // 해시태그 카테고리가 일부만 선택됨
      else {
        const generateApiText = () => {
          let filterApiText = '';
          Object.keys(onlyTrueHashtagObj).forEach((key) => {
            filterApiText = filterApiText + `${key}.eq. true,`;
          });
          filterApiText = filterApiText.substring(0, filterApiText.length - 2);
          return filterApiText;
        };

        const response = await supabase
          .from('reviews')
          .select()
          .in('cafe_id', idsOfCafesInMap)
          .or(generateApiText())
          .order('created_at', { ascending: true });
        return response.data;
      }
    }
    // 검색어 필터 있음
    else {
      // 선택된 해시태그 카테고리 없음
      if (Object.keys(onlyTrueHashtagObj).length === 0) {
        const response = await supabase
          .from('reviews')
          .select()
          .eq('해시태그 없음', true)
          .in('cafe_id', idsOfCafesInMap)
          .ilike('cafe_name', `%${cafeSearchText}%`)
          .order('created_at', { ascending: true });
        return response.data;
      }
      // 해시태그 카테고리 전체 선택됨
      else if (Object.keys(onlyTrueHashtagObj).length === 6) {
        const response = await supabase
          .from('reviews')
          .select()
          .in('cafe_id', idsOfCafesInMap)
          .ilike('cafe_name', `%${cafeSearchText}%`)
          .order('created_at', { ascending: true });
        return response.data;
      }
      // 해시태그 카테고리가 일부만 선택됨
      else {
        const generateApiText = () => {
          let filterApiText = '';
          Object.keys(onlyTrueHashtagObj).forEach((key) => {
            filterApiText = filterApiText + `${key}.eq. true,`;
          });
          filterApiText = filterApiText.substring(0, filterApiText.length - 2);
          return filterApiText;
        };

        const response = await supabase
          .from('reviews')
          .select()
          .in('cafe_id', idsOfCafesInMap)
          .or(generateApiText())
          .ilike('cafe_name', `%${cafeSearchText}%`)
          .order('created_at', { ascending: true });
        return response.data;
      }
    }
  }
};
