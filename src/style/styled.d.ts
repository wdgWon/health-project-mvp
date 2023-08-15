import "styled-components";

declare module "styled-components" {
   export interface DefaultTheme {
      borderRadius: string;

      colors: {
         main: string;
         secondary: string;
      };
   }
}

// 회원가입
type signup_req = {
   username: string;
   nickname: string;
   email: string;
   password: string;
   phone_number: string;
   regidence: string;
   area_range: [string];
};

type signup_res = null;

// 로그인
type login_req = {
   email: string;
   password: string;
};

type login_res = {
   member_id: number | string;
   nickname: string;
   phone_number: string;
   regidence: string;
   area_range: [string];
};

// 로그아웃
// why POST?
type logout_req = null;

type logout_res = null;

// 회원정보 수정
type modify_profile_req = {
   username?: string;
   nickname?: string;
   phone_number?: string;
   regidence?: string;
   area_range?: [string];
};

// status로 성공, 실패 확인
type modify_profile_res = null;

// 비밀번호 수정
type modify_pw_req = {
   current_password: string;
	change_password: string;
	confirmed_password: string;
};

// status로 성공, 실패 확인
type modify_pw_res = null;

// 회원 단건 조회
// GET 요청
type profile_req = null;

type profile_res = {
   username: string;
   nickname: string;
   phone_number: string;
   regidence: string;
   area_range: [string];
};

// 회원 전체 조회
// GET 요청
type profile_req = null;

type profile_res = [
   {
      username: string;
      nickname: string;
      phone_number: string;
      regidence: string;
      area_range: [string];
   }
];

// 회원탈퇴
type member_withdrawal_req = {
   password: string;
};

type member_withdrawal_res = null;

// 상품 등록
type itme_registration_req = {
   member_id: number | string;
   item_category_id: number | string;
   item_name: string;
   item_detail: string;
   item_price: number;
   item_quantity: number;
   item_images: [object];
   item_content: string;
};

type itme_registration_res = {
   item_id: number | string;
   created_at: timestamp;
};

// 상품 수정
type itme_modify_req = {
   item_category_id?: number | string;
   item_name?: string;
   item_detail?: string;
   item_price?: number;
   item_quantity?: number;
   item_images?: [object];
   item_content?: string;
};

type itme_modify_res = {
   updated_at: timestamp;
};

// 상품 단건 조회
type itme_req = null;

type itme_res = {
   member_id: number | string;
   item_category_id: number | string;
   item_name: string;
   item_detail: string;
   item_price: number;
   item_quantity: number;
   item_images: [object];
   item_content: string;
   created_at: timestamp;
   updated_at?: timestamp;
};

// 상품 전체 조회
type itmes_req = null;

type itmes_res = [
   {
      member_id: number | string;
      item_category_id: number | string;
      item_name: string;
      item_detail: string;
      item_price: number;
      item_quantity: number;
      item_images: [object];
      item_content: string;
      created_at: timestamp;
      updated_at?: timestamp;
   }
];


// 상품 삭제
type itme_delete_req = null;

type itme_delete_res = null;


// 상품 검색
// GET으로 검색 안됨, 확인 필요!


// 상품 댓글 작성 POST
type create_itme_comment_req = {
   member_id: number | string;
   item_comment_content: string;
}

type create_itme_comment_res = {
   comment_id: number | string;
   created_at: timestamp
}


// 상품 댓글 조회 GET
type read_itme_comment_req = null

type read_itme_comment_res = {
   created_at: timestamp
}


// 상품 댓글 수정 PUT
type update_itme_comment_req = {
   item_comment_content: string;
}

type update_itme_comment_res = {
   updated_at: timestamp
}


// 상품 댓글 삭제 DELETE
// status로 성공, 실패 확인
type delete_itme_comment_req = null

type delete_itme_comment_res = null


// 상품 카테고리 생성
// 관리자만 가능
type create_item_category_req = {
   item_category_title: string;
}

type create_item_category_res = {
   item_category_id: number | string;
   created_at: timestamp;
}


// 카테고리별 상품 조회
// 한 번에 받을 상품 갯수 제한 필요
type read_items_in_category_req = null

type read_items_in_category_res = [
   {
      member_id: number | string;
      item_name: string;
      item_detail: string;
      item_price: number;
      item_quantity: number;
      item_images: [object];
      item_content: string;
      created_at: timestamp;
      updated_at?: timestamp;
   }
]


// 카테고리 목록 조회
type read_item_categories_req = null

type read_item_categories_res = [
   {
      item_category_id: number | string;
      item_category_title: string;
      created_at: timestamp;
   }
]


// 카테고리 수정
// 이미 해당 카테고리로 설정된 상품들 처리 방법?
// status로 실패, 성공 확인
type update_item_category_req = {
   item_category_title: string;
}

type update_item_category_res = null


// 카테고리 삭제
// 이미 해당 카테고리로 설정된 상품들 처리 방법?
// status로 실패, 성공 확인
type delete_item_category_req = null

type delete_item_category_res = null


// 글 작성
type create_post_req = {
   member_id: number | string;
   board_id: number | string;
   post_images: [object];
   post_title: string;
   post_content: string;
}

type create_post_res = {
   post_id: number | string;
   created_at: timestamp;
}


// 글 단건 조회
type read_post_req = null

type read_post_res = {
   member_id: number | string;
   board_id: number | string;
   post_images: [object];
   post_title: string;
   post_content: string;
   created_at: timestamp;
   updated_at?: timestamp;
}


// 글 전체 조회
type read_posts_req = null

type read_posts_res = [
   {
      member_id: number | string;
      board_id: number | string;
      post_images: [object];
      post_title: string;
      post_content: string;
      created_at: timestamp;
      updated_at?: timestamp;
   }
]


// 글 수정
type update_post_req = {
   board_id?: number | string;
   post_images?: [object];
   post_title?: string;
   post_content?: string;
}

type update_post_res = {
   updated_at: timestamp;
}


// 글 삭제
// status로 성공, 실패 확인
type delete_posts_req = null

type delete_posts_res = null


// 글 검색
// GET으로 검색 안됨, 확인 필요!


// 글 댓글 작성
type create_post_comment_req = {
   member_id: number | string;
   post_comment_content: string;
}

type create_post_comment_res = {
   post_comment_id: number | string;
   created_at: timestamp;
}


// 글 댓글 조회
type read_post_comment_req = null

type read_post_comment_res = [
   {
      member_id: number | string;
      post_comment_id: number | string;
      post_comment_content: string;
      created_at: timestamp;
      updated_at?: timestamp;
   }
]


// 글 댓글 수정
type update_post_comment_req = {
   post_comment_content: string;
}

type update_post_comment_res = {
   updated_at: timestamp;
}


// 글 댓글 삭제
// status로 성공, 실패 확인
type update_post_comment_req = null

type update_post_comment_res = null


// 게시판 생성
// 관리자 권한 필요
type create_post_board_req = {
   post_board_title: string;
}

type create_post_board_res = {
   post_board_id: number | string;
   created_at: timestamp;
}


// 게시판별 글 조회
// ----이미지는 의논 필요----
type read_board_posts_req = null

type read_board_posts_res = [
   {
      member_id: number | string;
      post_image_url: URL;
      post_title: string;
      post_content: string;
      created_at: timestamp;
      updated_at?: timestamp;
   }
]


// 게시판 목록 조회
type read_post_boards_req = null

type read_post_boards_res = [
   {
      post_board_id: number | string;
      post_board_title: string;
      created_at: timestamp;
   }
]


// 게시판 수정
// 관리자 권한 필요
// ----해당 게시판 글들은?----
type update_post_board_req = {
   post_board_title: string;
}

type update_post_board_res = null


// 게시판 삭제
// 관리자 권한 필요
// ----해당 게시판 글들은?----
// status로 성공, 실패 확인
type delete_post_board_req = null

type delete_post_board_res = null


// 채팅방은 webSocket으로 해야되는데
// 의논 필요
