class API{
    static base_url="http://192.168.0.10:8000/api/admin/";
    static base_url_common="http://192.168.0.10:8000/api/common/";
    static login=this.base_url+"login";

    static get_single=this.base_url_common+"get";
    static get_all=this.base_url_common+"get_all";
    static get_some=this.base_url_common+"get_some";
    static insert=this.base_url_common+"insert";
    static update=this.base_url_common+"update";
    static delete=this.base_url_common+"delete";

    static add_category=this.base_url+"add_category";
    static update_category=this.base_url+"update_category";
    static get_all_category=this.base_url+"get_all_category";
    static delete_category=this.base_url+"delete_category";

    static add_sub_category=this.base_url+"add_sub_category";
    static update_sub_category=this.base_url+"update_sub_category";
    static get_all_sub_category=this.base_url+"get_all_sub_category";
    static delete_sub_category=this.base_url+"delete_sub_category";

    static add_service=this.base_url+"add_service";
    static update_service=this.base_url+"update_service";
    static get_all_services=this.base_url+"get_all_services";
    static delete_service=this.base_url+"delete_service";

    static add_option=this.base_url+"add_option";
    static update_option=this.base_url+"update_option";

    static add_new_caregiver=this.base_url+"add_new_caregiver";

    //request
    static get_all_request=this.base_url_common+"get_all_request";
    
    static test=this.base_url+"test";
    
    
    
} 
export default API