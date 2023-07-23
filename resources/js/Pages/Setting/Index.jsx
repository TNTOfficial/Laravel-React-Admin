import AdminLayout from '@/Layouts/adminLayout';
import { useForm } from '@inertiajs/react';
import React, { useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const SettingsForm = ({ settings }) => {
    const { data, setData, put } = useForm({
        about_us_short: '',
        footer_text: '',
        membership_success_response: '',
        contact_us_success_response: '',
        address: '',
        phone1: '',
        phone2: '',
        about_us: '',
        site_name: '',
        site_title: '',
        admin_email: '',
        foot_copyright_text: '',
        social_facebook: '',
        social_twitter: '',
        social_instagram: '',
        social_linkdin: '',
        google_analytics: '',
        seo_meta_title: '',
        seo_meta_description: '',
        github: '',
        pinterest: ''
    });

    useEffect(() => {
        setData({
            about_us_short: settings.find((setting) => setting.key === 'about_us_short')?.value ?? '',
            footer_text: settings.find((setting) => setting.key === 'footer_text')?.value ?? '',
            membership_success_response: settings.find((setting) => setting.key === 'membership_success_response')?.value ?? '',
            contact_us_success_response: settings.find((setting) => setting.key === 'contact_us_success_response')?.value ?? '',
            address: settings.find((setting) => setting.key === 'address')?.value ?? '',
            phone1: settings.find((setting) => setting.key === 'phone1')?.value ?? '',
            phone2: settings.find((setting) => setting.key === 'phone2')?.value ?? '',
            about_us: settings.find((setting) => setting.key === 'about_us')?.value ?? '',
            site_name: settings.find((setting) => setting.key === 'site_name')?.value ?? '',
            admin_email: settings.find((setting) => setting.key === 'admin_email')?.value ?? '',
            foot_copyright_text: settings.find((setting) => setting.key === 'foot_copyright_text')?.value ?? '',
            social_facebook: settings.find((setting) => setting.key === 'social_facebook')?.value ?? '',
            social_twitter: settings.find((setting) => setting.key === 'social_twitter')?.value ?? '',
            social_instagram: settings.find((setting) => setting.key === 'social_instagram')?.value ?? '',
            social_linkdin: settings.find((setting) => setting.key === 'social_linkdin')?.value ?? '',
            google_analytics: settings.find((setting) => setting.key === 'google_analytics')?.value ?? '',
            seo_meta_title: settings.find((setting) => setting.key === 'seo_meta_title')?.value ?? '',
            seo_meta_description: settings.find((setting) => setting.key === 'seo_meta_description')?.value ?? '',
            github: settings.find((setting) => setting.key === 'github')?.value ?? '',
            pinterest: settings.find((setting) => setting.key === 'pinterest')?.value ?? '',
        });
    }, [settings]);

    const handleSubmit = (e) => {
        e.preventDefault();

        put(route('settings.update'), data);
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <ul className="nav nav-tabs" id="icon-tab" role="tablist">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            id="icon-home-tab"
                                            data-bs-toggle="tab"
                                            href="#icon-home"
                                            role="tab"
                                            aria-controls="icon-home"
                                            aria-selected="true"
                                        >
                                            <i className="icofont icofont-ui-home"></i>General
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            id="profile-icon-tab"
                                            data-bs-toggle="tab"
                                            href="#profile-icon"
                                            role="tab"
                                            aria-controls="profile-icon"
                                            aria-selected="false"
                                        >
                                            <i className="icofont icofont-man-in-glasses"></i>Social
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            id="contact-icon-tab"
                                            data-bs-toggle="tab"
                                            href="#contact-icon"
                                            role="tab"
                                            aria-controls="contact-icon"
                                            aria-selected="false"
                                        >
                                            <i className="icofont icofont-contacts"></i>SEO
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="icon-tabContent">
                                    <div
                                        className="tab-pane fade show active"
                                        id="icon-home"
                                        role="tabpanel"
                                        aria-labelledby="icon-home-tab"
                                    >
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="form theme-form">
                                                            <form onSubmit={handleSubmit}>
                                                                {settings.map((setting) => (
                                                                    <React.Fragment key={setting.key}>
                                                                        {setting.key === 'about_us_short' && (
                                                                            <div className="form-group">
                                                                                <label
                                                                                    style={{
                                                                                        paddingTop: '30px',
                                                                                        paddingLeft: '5px',
                                                                                        fontSize: '20px',
                                                                                    }}
                                                                                    htmlFor="about_us_short"
                                                                                >
                                                                                    About us short description
                                                                                </label>
                                                                                <Editor
                                                                                    apiKey="4i0p55sb1m4fhrp0y07qkm9ejyei5jjzvjdniyownfx6t2lu"
                                                                                    name="about_us_short"
                                                                                    value={data.about_us_short}
                                                                                    init={{
                                                                                        height: 300,
                                                                                        menubar: false,
                                                                                        plugins: [
                                                                                            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                                                                            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                                                                            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                                                                                        ],
                                                                                        toolbar: 'undo redo | blocks | ' +
                                                                                            'bold italic forecolor | alignleft aligncenter ' +
                                                                                            'alignright alignjustify | bullist numlist outdent indent | ' +
                                                                                            'removeformat | help',
                                                                                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                                                                    }}
                                                                                    onEditorChange={(content) => setData('about_us_short', content)}
                                                                                />
                                                                            </div>
                                                                        )}
                                                                        {setting.key === 'footer_text' && (
                                                                            <div className="form-group">
                                                                                <label
                                                                                    style={{
                                                                                        paddingTop: '30px',
                                                                                        paddingLeft: '5px',
                                                                                        fontSize: '20px',
                                                                                    }}
                                                                                    htmlFor="footer_text"
                                                                                >
                                                                                    Footer text
                                                                                </label>
                                                                                <textarea
                                                                                    className="form-control"
                                                                                    name="footer_text"
                                                                                    id="footer_text"
                                                                                    rows="3"
                                                                                    value={data.footer_text}
                                                                                    onChange={(e) => setData('footer_text', e.target.value)}
                                                                                ></textarea>
                                                                            </div>
                                                                        )}

                                                                        {setting.key === 'membership_success_response' && (
                                                                            <div className="form-group">
                                                                                <label
                                                                                    style={{
                                                                                        paddingTop: '30px',
                                                                                        paddingLeft: '5px',
                                                                                        fontSize: '20px',
                                                                                    }}
                                                                                    htmlFor="membership_success_response"
                                                                                >
                                                                                    Membership Response Text
                                                                                </label>
                                                                                <textarea
                                                                                    className="form-control"
                                                                                    name="membership_success_response"
                                                                                    id="membership_success_response"
                                                                                    rows="3"
                                                                                    value={data.membership_success_response}
                                                                                    onChange={(e) => setData('membership_success_response', e.target.value)}
                                                                                ></textarea>
                                                                            </div>
                                                                        )}
                                                                        {setting.key === 'contact_us_success_response' && (
                                                                            <div className="form-group">
                                                                                <label
                                                                                    style={{
                                                                                        paddingTop: '30px',
                                                                                        paddingLeft: '5px',
                                                                                        fontSize: '20px',
                                                                                    }}
                                                                                    htmlFor="contact_us_success_response"
                                                                                >
                                                                                    Contact Us Response Text
                                                                                </label>
                                                                                <textarea
                                                                                    className="form-control"
                                                                                    name="contact_us_success_response"
                                                                                    id=""
                                                                                    rows="3"
                                                                                    value={data.contact_us_success_response}
                                                                                    onChange={(e) => setData('contact_us_success_response', e.target.value)}
                                                                                ></textarea>
                                                                            </div>
                                                                        )}{setting.key === 'address' && (
                                                                            <div className="form-group">
                                                                                <label
                                                                                    style={{
                                                                                        paddingTop: '30px',
                                                                                        paddingLeft: '5px',
                                                                                        fontSize: '20px',
                                                                                    }}
                                                                                    htmlFor="address"
                                                                                >
                                                                                    Address
                                                                                </label>
                                                                                <textarea
                                                                                    className="form-control"
                                                                                    name="address"
                                                                                    id="address"
                                                                                    rows="3"
                                                                                    value={data.address}
                                                                                    onChange={(e) => setData('address', e.target.value)}
                                                                                ></textarea>
                                                                            </div>
                                                                        )}{setting.key === 'phone1' && (
                                                                            <div className="form-group">
                                                                                <label
                                                                                    style={{
                                                                                        paddingTop: '30px',
                                                                                        paddingLeft: '5px',
                                                                                        fontSize: '20px',
                                                                                    }}
                                                                                    htmlFor="phone1"
                                                                                >
                                                                                    Phone No. 1
                                                                                </label>
                                                                                <input
                                                                                    className="form-control"
                                                                                    name="phone1"
                                                                                    id="phone1"
                                                                                    value={data.phone1}
                                                                                    onChange={(e) => setData('phone1', e.target.value)}
                                                                                />
                                                                            </div>
                                                                        )}
                                                                        {setting.key === 'phone2' && (
                                                                            <div className="form-group">
                                                                                <label
                                                                                    style={{
                                                                                        paddingTop: '30px',
                                                                                        paddingLeft: '5px',
                                                                                        fontSize: '20px',
                                                                                    }}
                                                                                    htmlFor="phone2"
                                                                                >
                                                                                    Phone No. 2
                                                                                </label>
                                                                                <input
                                                                                    className="form-control"
                                                                                    name="phone2"
                                                                                    id="phone2"
                                                                                    value={data.phone2}
                                                                                    onChange={(e) => setData('phone2', e.target.value)}
                                                                                />
                                                                            </div>
                                                                        )}
                                                                        {setting.key === 'about_us' && (
                                                                            <div className="form-group">
                                                                                <label
                                                                                    style={{
                                                                                        paddingTop: '30px',
                                                                                        paddingLeft: '5px',
                                                                                        fontSize: '20px',
                                                                                    }}
                                                                                    htmlFor="about_us"
                                                                                >
                                                                                    About Us
                                                                                </label>
                                                                                <Editor
                                                                                    apiKey="4i0p55sb1m4fhrp0y07qkm9ejyei5jjzvjdniyownfx6t2lu"
                                                                                    name="about_us"
                                                                                    value={data.about_us}
                                                                                    init={{
                                                                                        height: 300,
                                                                                        menubar: false,
                                                                                        plugins: [
                                                                                            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                                                                            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                                                                            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                                                                                        ],
                                                                                        toolbar: 'undo redo | blocks | ' +
                                                                                            'bold italic forecolor | alignleft aligncenter ' +
                                                                                            'alignright alignjustify | bullist numlist outdent indent | ' +
                                                                                            'removeformat | help',
                                                                                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                                                                    }}
                                                                                    onEditorChange={(content) => setData('about_us', content)}
                                                                                />
                                                                            </div>
                                                                        )}
                                                                        {setting.key === 'site_name' && (
                                                                            <div className="form-group">
                                                                                <label
                                                                                    style={{
                                                                                        paddingTop: '30px',
                                                                                        paddingLeft: '5px',
                                                                                        fontSize: '20px',
                                                                                    }}
                                                                                    htmlFor="site_name"
                                                                                >
                                                                                    Site Name
                                                                                </label>
                                                                                <input
                                                                                    className="form-control"
                                                                                    name="site_name"
                                                                                    id="site_name"
                                                                                    value={data.site_name}
                                                                                    onChange={(e) => setData('site_name', e.target.value)}
                                                                                />
                                                                            </div>
                                                                        )}{setting.key === 'site_title' && (
                                                                            <div className="form-group">
                                                                                <label
                                                                                    style={{
                                                                                        paddingTop: '30px',
                                                                                        paddingLeft: '5px',
                                                                                        fontSize: '20px',
                                                                                    }}
                                                                                    htmlFor="site_title"
                                                                                >
                                                                                    Site Title
                                                                                </label>
                                                                                <input
                                                                                    className="form-control"
                                                                                    name="site_title"
                                                                                    id="site_title"
                                                                                    value={data.site_title}
                                                                                    onChange={(e) => setData('site_title', e.target.value)}
                                                                                />
                                                                            </div>
                                                                        )}{setting.key === 'admin_email' && (
                                                                            <div className="form-group">
                                                                                <label
                                                                                    style={{
                                                                                        paddingTop: '30px',
                                                                                        paddingLeft: '5px',
                                                                                        fontSize: '20px',
                                                                                    }}
                                                                                    htmlFor="admin_email"
                                                                                >
                                                                                    Admin Email
                                                                                </label>
                                                                                <input
                                                                                    className="form-control"
                                                                                    name="admin_email"
                                                                                    id="admin_email"
                                                                                    value={data.admin_email}
                                                                                    onChange={(e) => setData('admin_email', e.target.value)}
                                                                                />
                                                                            </div>
                                                                        )}
                                                                        {setting.key === 'foot_copyright_text' && (
                                                                            <div className="form-group">
                                                                                <label
                                                                                    style={{
                                                                                        paddingTop: '30px',
                                                                                        paddingLeft: '5px',
                                                                                        fontSize: '20px',
                                                                                    }}
                                                                                    htmlFor="foot_copyright_text"
                                                                                >
                                                                                    Footer Copyright Text
                                                                                </label>
                                                                                <input
                                                                                    className="form-control"
                                                                                    name="foot_copyright_text"
                                                                                    id="foot_copyright_text"
                                                                                    value={data.foot_copyright_text}
                                                                                    onChange={(e) => setData('foot_copyright_text', e.target.value)}
                                                                                />
                                                                            </div>
                                                                        )}
                                                                    </React.Fragment>
                                                                ))}
                                                                <button type="submit" className="btn btn-primary">
                                                                    Save
                                                                </button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-content" id="icon-tabContent">
                                    <div
                                        className="tab-pane fade" id="profile-icon" role="tabpanel" aria-labelledby="profile-icon-tab"
                                    >
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="form theme-form">
                                                            <form onSubmit={handleSubmit}>
                                                                {settings.map((setting) => (
                                                                    <React.Fragment key={setting.key}>
                                                                        {setting.key === 'social_facebook' && (
                                                                            <div className="form-group">
                                                                                <label
                                                                                    style={{
                                                                                        paddingTop: '30px',
                                                                                        paddingLeft: '5px',
                                                                                        fontSize: '20px',
                                                                                    }}
                                                                                    htmlFor="social_facebook"
                                                                                >
                                                                                    Facebook
                                                                                </label>
                                                                                <input
                                                                                    className="form-control"
                                                                                    name="social_facebook"
                                                                                    id="social_facebook"
                                                                                    value={data.social_facebook}
                                                                                    onChange={(e) => setData('social_facebook', e.target.value)}
                                                                                />
                                                                            </div>
                                                                        )}
                                                                        {setting.key === 'social_twitter' && (
                                                                            <div className="form-group">
                                                                                <label
                                                                                    style={{
                                                                                        paddingTop: '30px',
                                                                                        paddingLeft: '5px',
                                                                                        fontSize: '20px',
                                                                                    }}
                                                                                    htmlFor="social_twitter"
                                                                                >
                                                                                    Twitter
                                                                                </label>
                                                                                <input
                                                                                    className="form-control"
                                                                                    name="social_twitter"
                                                                                    id="social_twitter"
                                                                                    value={data.social_twitter}
                                                                                    onChange={(e) => setData('social_twitter', e.target.value)}
                                                                                />
                                                                            </div>
                                                                        )}

                                                                        {setting.key === 'social_instagram' && (
                                                                            <div className="form-group">
                                                                                <label
                                                                                    style={{
                                                                                        paddingTop: '30px',
                                                                                        paddingLeft: '5px',
                                                                                        fontSize: '20px',
                                                                                    }}
                                                                                    htmlFor="social_instagram"
                                                                                >
                                                                                    Instagram
                                                                                </label>
                                                                                <input
                                                                                    className="form-control"
                                                                                    name="social_instagram"
                                                                                    id="social_instagram"
                                                                                    value={data.social_instagram}
                                                                                    onChange={(e) => setData('social_instagram', e.target.value)}
                                                                                />
                                                                            </div>
                                                                        )}
                                                                        {setting.key === 'social_linkdin' && (
                                                                            <div className="form-group">
                                                                                <label
                                                                                    style={{
                                                                                        paddingTop: '30px',
                                                                                        paddingLeft: '5px',
                                                                                        fontSize: '20px',
                                                                                    }}
                                                                                    htmlFor="social_linkdin"
                                                                                >
                                                                                    Linkdin
                                                                                </label>
                                                                                <input
                                                                                    className="form-control"
                                                                                    name="social_linkdin"
                                                                                    id="social_linkdin"
                                                                                    value={data.social_linkdin}
                                                                                    onChange={(e) => setData('social_linkdin', e.target.value)}
                                                                                />
                                                                            </div>
                                                                        )} {setting.key === 'github' && (
                                                                            <div className="form-group">
                                                                                <label
                                                                                    style={{
                                                                                        paddingTop: '30px',
                                                                                        paddingLeft: '5px',
                                                                                        fontSize: '20px',
                                                                                    }}
                                                                                    htmlFor="github"
                                                                                >
                                                                                    Github
                                                                                </label>
                                                                                <input
                                                                                    className="form-control"
                                                                                    name="github"
                                                                                    id="github"
                                                                                    value={data.github}
                                                                                    onChange={(e) => setData('github', e.target.value)}
                                                                                />
                                                                            </div>
                                                                        )} {setting.key === 'pinterest' && (
                                                                            <div className="form-group">
                                                                                <label
                                                                                    style={{
                                                                                        paddingTop: '30px',
                                                                                        paddingLeft: '5px',
                                                                                        fontSize: '20px',
                                                                                    }}
                                                                                    htmlFor="pinterest"
                                                                                >
                                                                                    Pinterest
                                                                                </label>
                                                                                <input
                                                                                    className="form-control"
                                                                                    name="pinterest"
                                                                                    id="pinterest"
                                                                                    value={data.pinterest}
                                                                                    onChange={(e) => setData('pinterest', e.target.value)}
                                                                                />
                                                                            </div>
                                                                        )}
                                                                    </React.Fragment>
                                                                ))}
                                                                <button type="submit" className="btn btn-primary">
                                                                    Save
                                                                </button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-content" id="icon-tabContent">
                                    <div
                                        class="tab-pane fade" id="contact-icon" role="tabpanel" aria-labelledby="contact-icon-tab"
                                    >
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="form theme-form">
                                                            <form onSubmit={handleSubmit}>
                                                                {settings.map((setting) => (
                                                                    <React.Fragment key={setting.key}>
                                                                        {setting.key === 'google_analytics' && (
                                                                            <div className="form-group">
                                                                                <label
                                                                                    style={{
                                                                                        paddingTop: '30px',
                                                                                        paddingLeft: '5px',
                                                                                        fontSize: '20px',
                                                                                    }}
                                                                                    htmlFor="google_analytics"
                                                                                >
                                                                                    Google Analytics
                                                                                </label>
                                                                                <input
                                                                                    className="form-control"
                                                                                    name="google_analytics"
                                                                                    id="google_analytics"
                                                                                    value={data.google_analytics}
                                                                                    onChange={(e) => setData('google_analytics', e.target.value)}
                                                                                />
                                                                            </div>
                                                                        )}
                                                                        {setting.key === 'seo_meta_title' && (
                                                                            <div className="form-group">
                                                                                <label
                                                                                    style={{
                                                                                        paddingTop: '30px',
                                                                                        paddingLeft: '5px',
                                                                                        fontSize: '20px',
                                                                                    }}
                                                                                    htmlFor="seo_meta_title"
                                                                                >
                                                                                    SEO Meta Title
                                                                                </label>
                                                                                <input
                                                                                    className="form-control"
                                                                                    name="seo_meta_title"
                                                                                    id="seo_meta_title"
                                                                                    value={data.seo_meta_title}
                                                                                    onChange={(e) => setData('seo_meta_title', e.target.value)}
                                                                                />
                                                                            </div>
                                                                        )}

                                                                        {setting.key === 'seo_meta_description' && (
                                                                            <div className="form-group">
                                                                                <label
                                                                                    style={{
                                                                                        paddingTop: '30px',
                                                                                        paddingLeft: '5px',
                                                                                        fontSize: '20px',
                                                                                    }}
                                                                                    htmlFor="seo_meta_description"
                                                                                >
                                                                                    SEO Meta Descrption
                                                                                </label>
                                                                                <input
                                                                                    className="form-control"
                                                                                    name="seo_meta_description"
                                                                                    id="seo_meta_description"
                                                                                    value={data.seo_meta_description}
                                                                                    onChange={(e) => setData('seo_meta_description', e.target.value)}
                                                                                />
                                                                            </div>
                                                                        )}
                                                                    </React.Fragment>
                                                                ))}
                                                                <button type="submit" className="btn btn-primary">
                                                                    Save
                                                                </button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

SettingsForm.layout = (Page) => <AdminLayout>{Page}</AdminLayout>;

export default SettingsForm;
