'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Modal from "react-modal";
import { SetStateAction, useState } from "react";

Modal.setAppElement('#modale');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    background: 'rgba(255,255,255,0.9)'
  },
};

export default function Home() {

  const [newIngredient, setNewIngredient] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [initialForm, setInitialForm] = useState({
    name: '',
    ingredients: [],
    price: '',
  });
  const [formData, setFormData] = useState(initialForm);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleNameChange = (e: { target: { value: any; }; }) => {
    setFormData({...formData, name: e.target.value});
  }

  const handlePriceChange = (e: { target: { value: any; }; }) => {
    setFormData({...formData, price: e.target.value});
  }

  const handleIngredientChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setNewIngredient(e.target.value);
  }

  const handleAddIngredient = (e: any) => {
    if (newIngredient.trim()) {
      setFormData({
        ...formData,
        ingredients: 
        [...formData.ingredients, newIngredient]
      });
      setNewIngredient('');
    }
  }

  const handleSubmit = (e: { preventDefault: () => String; }) => {
    e.preventDefault();
    services.push(formData);
    setFormData(initialForm);
    closeModal();
  };
  
  return (
    <main className={styles.main}>
      <div className={styles.topNav}>
        <div className={styles.logo}>
          <div className={styles.logoFrame}>
            <Image 
              src="/urubutoicon.png"
              width={30}
              height={30}
              className={styles.logoImage}
              alt="urubuto logo"
            />
          </div>
          <div className={styles.logoTitle}>UrubutoPay - Empowering digital payments</div>
        </div>
        <div className={styles.langueContainer}>
          <Icon icon="ph:globe" height={20} width={20}/>
          <div className={styles.languageTitle}>
            <span>EN</span>
            <Icon icon="ph:caret-down-fill" height={15} width={15}/>
          </div>
        </div>
      </div>
      <div className={styles.contentArea}>
        <div className={styles.secondNav}>
          <div className={styles.secondNavLeft}>
            <Image 
              src="/urubutoFull.png"
              width={200}
              height={40}
              className={styles.logoImage}
              alt="urubuto logo"
            />
            <div className={styles.searchSection}>
              <Icon icon="ph:magnifying-glass" width={20} height={20} color="grey"/>
              <input
                className={styles.searchInput}
                id="input"
                type="text"
                name="search"
                placeholder="Search"
              />
            </div>
          </div>
          <div className={styles.secondNavRight}>
            <Icon icon="ph:bell-light" width={25} height={25} color="black"/>
            <div className={styles.imageFrame}>
              <Image
                src="/customer-1.png"
                width={40}
                height={40}
                className={styles.customerIcon}
                alt="customer Icon"
              />
            </div>
          </div>
        </div>
        <div className={styles.mainArea}>
          <div className={styles.sideBar}>
            <Link 
              className={styles.barComponent}
              href="/dashboard">
              <Icon icon="ph:square-half-light" width={27} height={27}/>
              <p className={styles.linkTitle}>Dashboard</p>
            </Link>
            <Link 
              className={styles.barComponent}
              href="/dashboard/organisations">
              <Icon icon="ph:network" width={27} height={27}/>
              <p className={styles.linkTitle}>Organisations</p>
            </Link>
            <Link 
              className={styles.barComponent}
              href="/dashboard/merchants">
              <Icon icon="ph:handbag" width={27} height={27}/>
              <p className={styles.linkTitle}>Merchants</p>
            </Link>
            <Link 
              className={styles.barComponent}
              href="/dashboard/payments">
              <Image
              src="/ico_menu_payments.png"
              width={30}
              height={25}
              className={styles.logoImage}
              alt="urubuto logo"
              />
              <p className={styles.linkTitle}>Payments</p>
            </Link>
            <Link 
              className={styles.barComponent}
              href="/dashboard/usersAccounts">
              <Icon icon="ph:users-three" width={27} height={27}/>
              <p className={styles.linkTitle}>Users Accounts</p>
            </Link>
            <Link 
              className={styles.barComponent}
              href="/dashboard/reports">
              <Icon icon="ph:chart-line-light" width={27} height={27}/>
              <p className={styles.linkTitle}>Reports</p>
            </Link>
            <Link 
              className={styles.barComponent}
              href="/dashboard/notifications">
              <Icon icon="ph:notification-fill" width={27} height={27}/>
              <p className={styles.linkTitle}>Notifications</p>
            </Link>
            <Link 
              className={styles.barComponent}
              href="/dashboard/settings">
              <Icon icon="ph:gear" width={27} height={27}/>
              <p className={styles.linkTitle}>Settings</p>
            </Link>
            <Link 
              className={styles.barComponent}
              href="/">
              <Icon icon="ph:sign-out" width={27} height={27}/>
              <p className={styles.linkTitle}>Log Out</p>
            </Link>
          </div>
          <div className={styles.mainAreaContent}>
            <div className={styles.mainAreaContainer}>
              <Image
                src='/Rectangle.png'
                height={250}
                width={1000}
                className={styles.coverImage}
                alt="cover image"
              />
            <div className={styles.companyInfo}>
              <Image
                  src='/company-logo.png'
                  height={200}
                  width={200}
                  className={styles.companyLogo}
                  alt="cover image"
              />
              <p className={styles.companyName}>GoodTaste Restaurant</p>
              <p className={styles.companyService}>Food & Drinks</p>
            </div>
            </div>
            <div className={styles.table}>
              <div className={styles.tableTitle}>
                <div className={styles.tableTitleLeft}>
                  <div className={styles.serviceTitle}>Recipe</div>
                  <div className={styles.priceTitle}>Price</div>
                </div>
                <div className={styles.tableTitleRight}>
                  <div className={styles.newService} onClick={openModal}><Icon icon="ph:plus-bold" /><p>Add New Recipe</p></div>
                  <div className={styles.paymentLinks}>Create Payment Link</div>
                </div>
              </div>
              <div className={styles.tableBody}>
              {services.map((service, index) => (
                  <div className={styles.tableRow} key={index}>
                    <div className={styles.itemBodyLeft}>
                      <div className={styles.itemDescription}>
                        {service.name} (<span>{service.ingredients.join(', ')}</span>)
                      </div>
                      <div className={styles.itemPrice}>{service.price} RWF</div>
                    </div>
                    <div className={styles.itemBodyRight}>
                      <div className={styles.itemEdit}>
                        <Icon icon="ph:pencil-light" height={22} width={22}/>
                        <p className={styles.editText}>Edit</p>
                      </div>
                      <div className={styles.itemView}>
                        <Icon icon="ph:eye-light" height={22} width={22}/>
                        <p className={styles.viewText}>View</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div id='modale'>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Example Modal"
              style={customStyles}
              className={styles.modaleContainer}
            >
              <div className={styles.xContainer} onClick={closeModal}>
                <Icon icon="ph:x-light" color="#08509F"/>
              </div>
              <div className={styles.modaleCOntainer}>
                <p className={styles.modalTitle}>Create Recipe</p>
                <div className={styles.nameSection}>
                  <p className={styles.nameTitle}>Name</p>
                  <div className={styles.nameInputContainer}><input type="text" className={styles.nameInput} value={formData.name} onChange={handleNameChange}/></div>
                </div>
                <div className={styles.nameSection}>
                  <p className={styles.nameTitle}>Price</p>
                  <div className={styles.nameInputContainer}><input type="text" className={styles.nameInput} value={formData.price} onChange={handlePriceChange}/></div>
                </div>
                <div className={styles.ingredientSection}>
                  <p className={styles.ingredientTitle}>Ingredients</p>
                  {formData.ingredients.map((ingredient, index)=>(
                    <div className={styles.ingredientItem} key={index}>
                      <p className={styles.ingredient}>{ingredient}</p>
                    </div>
                  ))}
                  <div className={styles.newIngredientSection}>
                    <div className={styles.newIngredientFieldContainer}>
                      <input className={styles.newIngredientField} placeholder="Name" type="text" value={newIngredient} 
                          onChange={handleIngredientChange}/>
                    </div>
                    <button className={styles.addNewIngredientButton} onClick={handleAddIngredient}>add</button>
                  </div>
                  <button className={styles.addButton} onClick={handleSubmit}>create</button>
                </div>
              </div>
            </Modal>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const services = [
  {
    name: 'cheese burger',
    ingredients: ['cheese','burger','fries'],
    price: '5000'
  },
  {
    name: 'hamme sandwich',
    ingredients: ['hamme','letuce','tomato'],
    price: '3500'
  },
  {
    name: 'double cheese burger',
    ingredients: ['cheese','steak','latuce','tomato','pickles'],
    price: '7000'
  },
  {
    name: 'chicken wrap',
    ingredients: ['chiken','tomato','latuce','barbecue sauce'],
    price: '4500'
  },
  {
    name: 'tacos',
    ingredients: ['cheese','pepper','tomato','barbecue sauce'],
    price: '6000'
  },
  {
    name: 'chicken sandwich',
    ingredients: ['chiken','bread','letuce','tomato'],
    price: '3000'
  },
]