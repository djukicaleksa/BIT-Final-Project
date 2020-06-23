import React from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';


const AdminHeader = () => {
    return (
        <Navbar className={`teal`}
            alignLinks="right"
            centerChildren
            brand={<a className="brand-logo " href="#">Reports Administration</a>}
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}
            options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }}
        >
            <Link to="/admin/reports"><NavItem>
                Reports
            </NavItem></Link>
            <Link to='/admin/reports/createreport'><NavItem>
                Create Report
            </NavItem></Link>

        </Navbar>
    )
}

export { AdminHeader };