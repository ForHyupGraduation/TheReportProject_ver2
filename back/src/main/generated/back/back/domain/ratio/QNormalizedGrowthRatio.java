package back.back.domain.ratio;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QNormalizedGrowthRatio is a Querydsl query type for NormalizedGrowthRatio
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QNormalizedGrowthRatio extends EntityPathBase<NormalizedGrowthRatio> {

    private static final long serialVersionUID = -167463040L;

    public static final QNormalizedGrowthRatio normalizedGrowthRatio = new QNormalizedGrowthRatio("normalizedGrowthRatio");

    public final NumberPath<Double> averageOperatingProfitsGrowthRate = createNumber("averageOperatingProfitsGrowthRate", Double.class);

    public final NumberPath<Double> averageSalesGrowthRate = createNumber("averageSalesGrowthRate", Double.class);

    public final StringPath companyCode = createString("companyCode");

    public final StringPath companyName = createString("companyName");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public QNormalizedGrowthRatio(String variable) {
        super(NormalizedGrowthRatio.class, forVariable(variable));
    }

    public QNormalizedGrowthRatio(Path<? extends NormalizedGrowthRatio> path) {
        super(path.getType(), path.getMetadata());
    }

    public QNormalizedGrowthRatio(PathMetadata metadata) {
        super(NormalizedGrowthRatio.class, metadata);
    }

}

