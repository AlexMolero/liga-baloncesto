package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Jugador;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * Spring Data JPA repository for the Jugador entity.
 */
public interface JugadorRepository extends JpaRepository<Jugador,Long> {

    /*@Query("select Jugador from Jugador j where j.numCanastas > :basket")
    List<Jugador> findPlayersByBaskets(@Param("basket") Integer basket);*/

    @Query("select j from Jugador j where j.numCanastas > 7")
    List<Jugador> findPlayersByBaskets();
}
