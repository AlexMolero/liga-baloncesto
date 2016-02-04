package com.mycompany.myapp.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import java.time.LocalDate;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A Jugador.
 */
@Entity
@Table(name = "jugador")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Jugador implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "fecha_nacimiento")
    private LocalDate fechaNacimiento;

    @Column(name = "num_canastas")
    private Integer numCanastas;

    @Column(name = "num_asistencias")
    private Integer numAsistencias;

    @Column(name = "rebotes_totales")
    private Integer rebotesTotales;

    @Column(name = "posicion_campo")
    private String posicionCampo;

    @Column(name = "dorsal")
    private Integer dorsal;

    @ManyToOne
    @JoinColumn(name = "equipo_id")
    private Equipo equipo;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public LocalDate getFechaNacimiento() {
        return fechaNacimiento;
    }

    public void setFechaNacimiento(LocalDate fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

    public Integer getNumCanastas() {
        return numCanastas;
    }

    public void setNumCanastas(Integer numCanastas) {
        this.numCanastas = numCanastas;
    }

    public Integer getNumAsistencias() {
        return numAsistencias;
    }

    public void setNumAsistencias(Integer numAsistencias) {
        this.numAsistencias = numAsistencias;
    }

    public Integer getRebotesTotales() {
        return rebotesTotales;
    }

    public void setRebotesTotales(Integer rebotesTotales) {
        this.rebotesTotales = rebotesTotales;
    }

    public String getPosicionCampo() {
        return posicionCampo;
    }

    public void setPosicionCampo(String posicionCampo) {
        this.posicionCampo = posicionCampo;
    }

    public Integer getDorsal() {
        return dorsal;
    }

    public void setDorsal(Integer dorsal) {
        this.dorsal = dorsal;
    }

    public Equipo getEquipo() {
        return equipo;
    }

    public void setEquipo(Equipo equipo) {
        this.equipo = equipo;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Jugador jugador = (Jugador) o;
        return Objects.equals(id, jugador.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Jugador{" +
            "id=" + id +
            ", nombre='" + nombre + "'" +
            ", fechaNacimiento='" + fechaNacimiento + "'" +
            ", numCanastas='" + numCanastas + "'" +
            ", numAsistencias='" + numAsistencias + "'" +
            ", rebotesTotales='" + rebotesTotales + "'" +
            ", posicionCampo='" + posicionCampo + "'" +
            ", dorsal='" + dorsal + "'" +
            '}';
    }
}
