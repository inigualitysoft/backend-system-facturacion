import { User } from "src/auth/entities/user.entity";
import { Customer } from "src/customers/entities/customer.entity";
import { Provider } from "src/providers/entities/provider.entity";
import { Sucursal } from "src/sucursal/entities/sucursal.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('companies')
export class Company {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToMany(() => User, (user) => user.company)
    users: User[];

    @OneToMany(() => Provider, (provider) => provider.company)
    provider: Provider[]

    @OneToMany(() => Customer, (customer) => customer.company_id)
    customer: Customer[]

    @OneToMany(() => Sucursal, (sucursal) => sucursal.company_id )
    sucursal: Sucursal[]

    @Column({ type: 'varchar', length: 255 })
    razon_social: string;

    @Column({ type: 'varchar', length: 255 })
    nombre_comercial: string;

    @Column({ type: 'varchar', length: 300 })
    direccion_matriz: string;

    @Column({ type: 'varchar', length: 13, unique: true })
    ruc: string;

    @Column({ type: 'varchar', length: 100 })
    email: string;

    @Column({ type: 'varchar', default: 15 })
    telefono: string;

    @Column({ type: 'text', nullable: true })
    logo?: string;

    @Column({ type: 'bool' })
    obligado_contabilidad: boolean;

    @Column({ type: 'varchar', length: 300 })
    clave_certificado: string;

    @Column({ type: 'varchar', default: null })
    archivo_certificado: string;    

    @Column({ type: 'bool', default: true })
    isActive: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}
