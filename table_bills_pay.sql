select * from agency order by id desc;
select * from customers;

CREATE TABLE IF NOT EXISTS `bank-beedev`.`bills_pay` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `value` FLOAT(8,2) NOT NULL,
  `due_date` DATE NOT NULL,
  `pay_date` DATE NULL DEFAULT NULL,
  `customers_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_bills_pay_customers_idx` (`customers_id` ASC),
  CONSTRAINT `fk_bills_pay_customers`
    FOREIGN KEY (`customers_id`)
    REFERENCES `bank-beedev`.`customers` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;
