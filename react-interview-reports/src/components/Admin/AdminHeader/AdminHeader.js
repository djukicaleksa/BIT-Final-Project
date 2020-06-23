import React from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';


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
            <NavItem>
                Reports
            </NavItem>
            <NavItem>
                Create Report
            </NavItem>

        </Navbar>
    )
}

export { AdminHeader };