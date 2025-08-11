import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Sidebar() {
    return (
        <>
            <div>
                {/* <!-- ======= Sidebar ======= --> */}
                <aside id="sidebar" class="sidebar">

                    <ul class="sidebar-nav" id="sidebar-nav">

                        {/* <li className="nav-item">
        <Link to="/admin-login" className="nav-link text-dark">
            Admin Login
        </Link>
    </li> */}

                        <li class="nav-item">
                            <Link to="/" class="nav-link collapsed " href="">
                                <i class="bi bi-grid"></i>
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        {/* <!-- End Dashboard Nav --> */}

                        {/* <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
            <i class="bi bi-menu-button-wide"></i><span>Components</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="components-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
                <a href="components-alerts.html">
                    <i class="bi bi-circle"></i><span>Alerts</span>
                </a>
            </li>
            <li>
                <a href="components-accordion.html">
                    <i class="bi bi-circle"></i><span>Accordion</span>
                </a>
            </li>
            <li>
                <a href="components-badges.html">
                    <i class="bi bi-circle"></i><span>Badges</span>
                </a>
            </li>
            <li>
                <a href="components-breadcrumbs.html">
                    <i class="bi bi-circle"></i><span>Breadcrumbs</span>
                </a>
            </li>
            <li>
                <a href="components-buttons.html">
                    <i class="bi bi-circle"></i><span>Buttons</span>
                </a>
            </li>
            <li>
                <a href="components-cards.html">
                    <i class="bi bi-circle"></i><span>Cards</span>
                </a>
            </li>
            <li>
                <a href="components-carousel.html">
                    <i class="bi bi-circle"></i><span>Carousel</span>
                </a>
            </li>
            <li>
                <a href="components-list-group.html">
                    <i class="bi bi-circle"></i><span>List group</span>
                </a>
            </li>
            <li>
                <a href="components-modal.html">
                    <i class="bi bi-circle"></i><span>Modal</span>
                </a>
            </li>
            <li>
                <a href="components-tabs.html">
                    <i class="bi bi-circle"></i><span>Tabs</span>
                </a>
            </li>
            <li>
                <a href="components-pagination.html">
                    <i class="bi bi-circle"></i><span>Pagination</span>
                </a>
            </li>
            <li>
                <a href="components-progress.html">
                    <i class="bi bi-circle"></i><span>Progress</span>
                </a>
            </li>
            <li>
                <a href="components-spinners.html">
                    <i class="bi bi-circle"></i><span>Spinners</span>
                </a>
            </li>
            <li>
                <a href="components-tooltips.html">
                    <i class="bi bi-circle"></i><span>Tooltips</span>
                </a>
            </li>
        </ul>
    </li>
    <!-- End Components Nav --> */}

                        <li class="nav-item">
                            <a class="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
                                <i class="bi bi-journal-text"></i><span>Forms</span><i class="bi bi-chevron-down ms-auto"></i>
                            </a>
                            <ul id="forms-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                                <li>
                                    <Link to='/customers'>
                                        <i class="bi bi-circle"></i><span>Customers</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/employees'>
                                        <i class="bi bi-circle"></i><span>Employees</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        {/* <!-- End Forms Nav --> */}

                        {/* Issues */}
                        <li class="nav-item">
                            <Link to="/issues" class="nav-link collapsed" href="">
                                <i class="bi bi-exclamation-circle"></i>
                                <span> Customer Issues</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
                                <i class="bi bi-layout-text-window-reverse"></i><span>General Reports</span><i class="bi bi-chevron-down ms-auto"></i>
                            </a>
                            <ul id="tables-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                                <li>
                                    <Link to='/issue-reviews'>
                                        <i class="bi bi-circle"></i><span>Issue Reviews</span>
                                    </Link>
                                </li>
                                {/* <li>
                                    <a>
                                        <i class="bi bi-circle"></i><span>Data Tables</span>
                                    </a>
                                </li> */}
                            </ul>
                        </li>
                        {/* <!-- End Tables Nav --> */}

                        {/* <li class="nav-heading">Pages</li> */}

                        <li class="nav-item">
                            <Link to="/quotations" class="nav-link collapsed" href="">
                                {/* <i class="bi bi-person"></i> */}
                                <i class="bi bi-file-earmark"></i>
                                <span>Quotations</span>
                            </Link>
                        </li>
                        {/* <!-- End Profile Page Nav --> */}

                        <li class="nav-item">
                            <Link to="/quotation-details" class="nav-link collapsed" href="">
                                {/* <i class="bi bi-person"></i> */}
                                <i class="bi bi-file-earmark-text"></i>
                                <span>Quotation Details</span>
                            </Link>
                        </li>
                        {/* <!-- End Profile Page Nav --> */}

                        <li class="nav-item">
                            <Link to="/amc-contracts" class="nav-link collapsed" href="">
                                {/* <i class="bi bi-person"></i> */}
                                <i class="bi bi-file-check"></i>
                                <span>AMC Contracts</span>
                            </Link>
                        </li>
                        {/* <!-- End Profile Page Nav --> */}

                        <li class="nav-item">
                            <Link to="/amc-contract-details" class="nav-link collapsed" href="">
                                {/* <i class="bi bi-person"></i> */}
                                <i class="bi bi-file-text"></i>
                                <span>AMC Contract Details</span>
                            </Link>
                        </li>
                        {/* <!-- End Profile Page Nav --> */}
                        {/* 
                        <li class="nav-item">
                            <a class="nav-link collapsed" href="pages-faq.html">
                                <i class="bi bi-question-circle"></i>
                                <span>F.A.Q</span>
                            </a>
                        </li> */}
                        {/* <!-- End F.A.Q Page Nav --> */}

                        {/* <li class="nav-item">
                            <a class="nav-link collapsed" href="pages-contact.html">
                                <i class="bi bi-envelope"></i>
                                <span>Contact</span>
                            </a>
                        </li> */}
                        {/* <!-- End Contact Page Nav --> */}

                        {/* <li class="nav-item">
                            <a class="nav-link collapsed" href="pages-register.html">
                                <i class="bi bi-card-list"></i>
                                <span>Register</span>
                            </a>
                        </li> */}
                        {/* <!-- End Register Page Nav --> */}

                        {/* <li class="nav-item">
                            <a class="nav-link collapsed" href="pages-login.html">
                                <i class="bi bi-box-arrow-in-right"></i>
                                <span>Login</span>
                            </a>
                        </li> */}
                        {/* <!-- End Login Page Nav --> */}

                        {/* <li class="nav-item">
                            <a class="nav-link collapsed" href="pages-error-404.html">
                                <i class="bi bi-dash-circle"></i>
                                <span>Error 404</span>
                            </a>
                        </li> */}
                        {/* <!-- End Error 404 Page Nav --> */}

                        {/* <li class="nav-item">
                            <a class="nav-link collapsed" href="pages-blank.html">
                                <i class="bi bi-file-earmark"></i>
                                <span>Blank</span>
                            </a>
                        </li> */}
                        {/* <!-- End Blank Page Nav --> */}

                    </ul>

                </aside>
                {/* <!-- End Sidebar--> */}
            </div>

            <div>
                <Outlet />
            </div>

        </>
    )
}

export default Sidebar