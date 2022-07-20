import { Component } from "solid-js"

// styles
import styles from './TabBarPhone.module.scss';

// icons
import { RiBuildingsHome5Line, RiBuildingsHome5Fill } from 'solid-icons/ri'

export const TabBarPhone: Component = () => {
    return (<div class={styles.tabBarContainer}><RiBuildingsHome5Line size={"120px"}/></div>)
}