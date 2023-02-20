package back.back.repository;

import back.back.domain.PortFolio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PortFolioRepository extends JpaRepository<PortFolio, Long> {
    List<PortFolio> findByMemberId(Long MemberId);
    @Query("delete from PortFolio p where p.companyName = :companyName")
    PortFolio removeByCompanyName(@Param("companyName") String companyName);
}
