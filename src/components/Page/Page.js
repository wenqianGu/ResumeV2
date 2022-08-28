import React from 'react'

// single page application SPA ->单页应用
const Page = ({
                  activePage,
              }) => (
    <div>
        {activePage === 'HOME_PAGE' && <div>Home Page</div>}
        {activePage === 'RESUME_PAGE' && <div>Resume Page</div>}
        {activePage === 'SERVICES_PAGE' && <div>Service Page</div>}
        {activePage === 'BLOG_PAGE' && <div>Blog Page</div>}
        {activePage === 'CONTACT_PAGE' && <div>Contact Page</div>}
    </div>
)

export default Page