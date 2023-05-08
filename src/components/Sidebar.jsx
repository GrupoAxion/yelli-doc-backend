import React, { useEffect } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar, menuClasses } from 'react-pro-sidebar';
import { SidebarHeader } from './SidebarHeader';
import DescriptionIcon from '@mui/icons-material/Description'; // Para documentación
import MenuBookIcon from '@mui/icons-material/MenuBook'; // Para manual
import CodeIcon from '@mui/icons-material/Code'; // Para referencia API
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ComputerIcon from '@mui/icons-material/Computer';
import Link from "next/link";
import styles from "../styles/Sidebar.module.css";
import { SidebarHeaderCollapse } from './SidebarHeaderCollapse';

export const Playground = () => {

  const { toggleSidebar, collapseSidebar, broken, collapsed } = useProSidebar();
  const [isRTL, setIsRTL] = React.useState(false);
  const [theme, setTheme] = React.useState('light');
  const [hasImage, setHasImage] = React.useState(false);

  const [themes, setThemes] = React.useState({
    sidebar: {
      backgroundColor: '#0b2948',
      color: '#8ba1b7',
    },
    menu: {
      menuContent: '#082440',
      icon: '#59d0ff',
      hover: {
        backgroundColor: '#00458b',
        color: '#b6c8d9',
      },
      disabled: {
        color: '#3e5e7e',
      },
    },
  });


  const handleCollapseClick = () => {
    collapseSidebar();
  };

  const handleThemesOption = (theme) => {

    if (theme == 'light') {

      setThemes({
        sidebar: {
          backgroundColor: '#ffffff',
          color: '#607489',
        },
        menu: {
          menuContent: '#fbfcfd',
          icon: '#0098e5',
          hover: {
            backgroundColor: '#c5e4ff',
            color: '#44596e',
          },
          disabled: {
            color: '#9fb6cf',
          },
        },
      })

    } else {

      setThemes({
        sidebar: {
          backgroundColor: '#0b2948',
          color: '#8ba1b7',
        },
        menu: {
          menuContent: '#082440',
          icon: '#59d0ff',
          hover: {
            backgroundColor: '#00458b',
            color: '#b6c8d9',
          },
          disabled: {
            color: '#3e5e7e',
          },
        },
      })

    }
  };

  useEffect(() => {
    handleThemesOption(theme)
    console.log(themes.sidebar.backgroundColor);
  }, [])
  
  // hex to rgba converter
  const hexToRgba = (hex, alpha) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const menuItemStyles = {
    root: {
      fontSize: '13px',
      fontWeight: 400,
    },
    icon: (theme) => ({
      color: themes.menu.icon,
      [`.${menuClasses.disabled}`]: {
        color: themes.menu.disabled.color,
      },
    }),
    SubMenuExpandIcon: {
      color: '#b6b7b9',
    },
    subMenuContent: (theme, level, hasImage, collapsed) => ({
      backgroundColor:
        level === 0
          ? hexToRgba(themes.menu.menuContent, hasImage && !collapsed ? 0.4 : 1)
          : 'transparent',
    }),
    button: (theme, hasImage) => ({
      [`.${menuClasses.disabled}`]: {
        color: themes.menu.disabled.color,
      },
      '&:hover': {
        backgroundColor: hexToRgba(themes.menu.hover.backgroundColor, hasImage ? 0.8 : 1),
        color: themes.menu.hover.color,
      },
    }),
    label: (open) => ({
      fontWeight: open ? 600 : 600,
    }),
  };
  
  return (
    <div style={{ display: 'flex', height: '100%', direction: isRTL ? 'rtl' : 'ltr' }}>
      <Sidebar
        image="https://user-images.githubusercontent.com/25878302/144499035-2911184c-76d3-4611-86e7-bc4e8ff84ff5.jpg"
        rtl={isRTL}
        breakPoint="lg"
        backgroundColor={hexToRgba(themes.sidebar.backgroundColor, hasImage ? 0.9 : 1)}
        rootStyles={{
          color: themes.sidebar.color,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
            marginBottom: '32px',
          }}
        >
          <div>
            {
              collapsed ? 
              <SidebarHeaderCollapse style={{ marginBottom: '24px', marginTop: '16px' , marginRight: '38px' }} />
              :
              <SidebarHeader style={{ marginBottom: '24px', marginTop: '16px' , marginRight: '38px' }} />
            }
            
          </div>
          <div>
            <Link href="/login">
              <AccountBoxIcon />
            </Link>
          </div>
        </div>


          <div style={{ flex: 1, marginBottom: '32px' }}>
            <Menu menuItemStyles={menuItemStyles}>

              <MenuItem icon={< SettingsIcon />} component={<Link href="/seting" />}>
                Configuración
              </MenuItem>

              <SubMenu
                label="Desarrollo"
                icon={ <ComputerIcon />}
              >
                <MenuItem icon={< DescriptionIcon />} component={<Link href="/docs" />}>
                  Documentación
                </MenuItem>
                <MenuItem icon={< CodeIcon />} component={<Link href="/seting" />}>
                  Api
                </MenuItem>

              </SubMenu>
              <SubMenu label="Guía de usuario" icon={<MenuBookIcon />}>
                <MenuItem> Documentación </MenuItem>
              </SubMenu>
            </Menu>

            <div style={{ padding: '0 24px', marginBottom: '8px', marginTop: '32px' }}>
              <div
                variant="body2"
                fontWeight={600}
                style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: '0.5px' }}
              >
                
              </div>
            </div>

            <Menu menuItemStyles={menuItemStyles} >
              <MenuItem  onClick={handleCollapseClick} icon={ collapsed ? <ChevronRightIcon/> : <ChevronLeftIcon/>  }>
                {collapsed ? '' : 'Colapsar'}
              </MenuItem>
            </Menu>
          </div>
        </div>
        
      </Sidebar>
      <div className={styles.footer}>
          © 2023 Yelli. All rights reserved.
      </div>
    </div>
  );
};

export default Playground;
