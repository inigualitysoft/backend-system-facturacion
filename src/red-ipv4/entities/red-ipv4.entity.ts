import { Router } from "src/router/entities/router.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('redes-ipv4')
export class RedIpv4 {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Router, (router) => router.redes, { eager: true })
    @JoinColumn({ name: 'router_id' })
    router_id: Router;

    @Column({ type: 'varchar', length: 100 })
    nombre: string;

    @Column({ type: 'varchar', length: 18 })
    red: string;

    @Column({ type: 'varchar', length: 70 })
    cidr: string;

    @Column({ type: 'varchar', length: 18 })
    tipo_uso: string;

    @Column({ type: 'bool', default: true })
    isActive: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
